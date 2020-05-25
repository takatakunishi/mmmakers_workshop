import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropzone from 'react-dropzone'
import { postContent, setUrlContent } from '../../actions/Upload/ActionCreator'
import '../../styles/molecules/DropZone.css'


const DropZone = () => {
  const dispatch = useDispatch();
  const URLs = useSelector(state => state.content.url);

  const onDrop = (acceptedFiles) => {//画像ドロップ
    var newURLs = [...URLs]//スプレッド構文で、新しい配列を作成
    let url = ''
    var file = {
      data: acceptedFiles
    }
    acceptedFiles.forEach(acceptedFile => {
      url = URL.createObjectURL(acceptedFile)
      newURLs.push(url)//配列の末尾に urlの要素を追加
      dispatch(postContent(file));
    })
    dispatch(setUrlContent(newURLs));
  }

  return (
    <div className="DropZone">
      <Dropzone onDrop={onDrop}>
        {({ isDragActive, getInputProps, getRootProps }) => (
          <div className={isDragActive ? 'uploadContainerOnDrag' : 'uploadContainer'} {...getRootProps()}>
            <input {...getInputProps()} />
            <span className='uploadText'>{isDragActive ? "ファイル選択済" : 'ファイルを選択'}</span>
          </div>
        )}
      </Dropzone>
      <div className='displayImageAreaContainer'>
        <div className='displayImageContainer'>
          {
            URLs.map((url, i) => {
              return <img className='image' src={url} alt="" key={i} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default DropZone;
