import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/molecules/AllWorksDisplay.css'
import WorkBlock from '../atoms/WorkBlock'

const AllWorksDisplay = () => {
  const allData = useSelector(state => state.worksState.eachData);
  console.log(allData);
  const works = allData.map((value, index) => {
    return < WorkBlock auth={value.Auth} title={value.Title} url={value.Url} key={index} path={value.WorkTag} />
    // return <div>sd</div>
  })

  return (
    <div className="AllWorksDisplay">
      {works}
    </div>
  )
}

export default AllWorksDisplay;
