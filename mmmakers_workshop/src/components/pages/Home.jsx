import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import '../../styles/pages/Home.css';
import HomeTemplate from '../templates/HomeTemplate'
import { getAllWorksRequest } from '../../actions/Works/ActionCreater'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Home = () => {
  const history = useHistory();
  const login = useSelector(state => state.loginUser.login);
  async function loginCheck() {
    if (!login) {
      history.push({
        pathname: '/login',
        state: {
          // url: url,
          // path: path
        }
      });
      return false
    }
    return true
  }
  const dispatch = useDispatch();
  useEffect(() => {
    loginCheck().then((c) => {
      if (c) {
        dispatch(getAllWorksRequest());
      }
    })
  }, [dispatch])

  return (
    <div className="Home">
      <HomeTemplate />
    </div>
  );
}

export default Home;
