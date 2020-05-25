import React, { useState } from 'react';
import { postWorkRequest } from '../../actions/Works/ActionCreater';
import { loading } from '../../actions/Upload/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseApp } from '../../plugins/firebase';
import '../../styles/molecules/FormWorkData.css';

const util = require('util')

const FormWorkData = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector(state => state.loginUser);
  const files = useSelector(state => state.content.file);
  var blob;

  async function uploads() {
    const storage = firebaseApp.storage();
    const file_name = files.data[0].name;
    blob = new Blob(files.data, { type: "image/jpeg" })
    var uploadRef = storage.ref('images/');
    uploadRef = storage.ref('images/').child(file_name);

    return await uploadRef.put(blob).then(async snapshot => {
      return await uploadRef.getDownloadURL().then(url => {
        return url;
      });
    })

  }

  const [workPostTitle, setworkPostTitle] = useState('');
  const onWorkPostTitleChange = (e) => {
    setworkPostTitle(e.currentTarget.value);
  }

  const [workPostComment, setworkPostComment] = useState('');
  const onWorkPostComment = (e) => {
    setworkPostComment(e.currentTarget.value);
  }

  var dis = util.promisify((url) => {
    const userdata = {
      userName: loginUser.userName,
      password: loginUser.password,
    }
    console.log(userdata);

    const worksData = [loginUser.userName, workPostTitle, url, workPostComment];
    dispatch(postWorkRequest(worksData, userdata))
  })

  async function actionfun() {
    await uploads().then(url => {
      dis(url)
    })
  }

  const handleClickSubmitt = function (e) {
    //console.log("正常");
    e.preventDefault();
    if (workPostTitle === '' || workPostComment === '' || Object.keys(files).length === 0) {
      alert("空欄を埋めてください");
      return;
    }
    dispatch(loading())
    actionfun();
    setworkPostTitle("");
    setworkPostComment("");
  }

  return (

    <div id="formWorkData">
      <div className="container">
        <form>
          <div id="wpt">
            <div>
              <input id="workPostTitle" type="text" value={workPostTitle} onChange={onWorkPostTitleChange} placeholder='タイトル'></input>
            </div>
          </div>
          <div id="wpc">
            <div>
              <textarea id="workPostComment" value={workPostComment} onChange={onWorkPostComment} placeholder='投稿内容'></textarea>
            </div>
          </div>
          <input id='submit' type="submit" value="投稿する" onClick={handleClickSubmitt} />
        </form>

      </div>
    </div>
  )
}

export default FormWorkData;
