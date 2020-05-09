import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/pages/Home.css';
import HomeTemplate from '../templates/HomeTemplate'
import { getAllWorksRequest } from '../../actions/Works/ActionCreater'




const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWorksRequest());
  }, [dispatch])

  return (
    <div className="Home">
      <HomeTemplate />
    </div>
  );
}

export default Home;
