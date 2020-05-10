import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/organisms/ShowWorkData.css'
import { getEachWorkRequest } from '../../actions/Works/ActionCreater';

const ShowWorkData = () => {

    var tag
    const dispatch = useDispatch();
    function bef() {
        return new Promise((resolve, reject) => {
            tag = window.location.hash.replace("#/WorkDetail/", '').toString()
            resolve(tag)
        });
    };
    function pros() {
        bef().then((s) => {
            console.log(s)
            dispatch(getEachWorkRequest(s));
        }).catch(function (error) {
            console.log('エラーが発生しました：' + error);
        });
    }
    useEffect(() => {
        pros();
    }, [])
    const data = useSelector(state => state.worksState.workDetail);
    console.log(data)

    return (
        <div className="ShowWorkData">
            {Object.keys(data).length ? <div className="ShowWorkData-container" key={data.WorkTag}>
                <div className="ShowWorkData-ImageContainer">
                    <img className="workImage" src={data.Url[0]} />
                </div>
                <a className="worktitle">{data.Title}</a>
                <a className="workauther">{data.Auth}</a>
                <div>{data.Description}</div>
                <div className="ShowWorkData-tagsData">
                    {
                        data.Tags.map((value, index) => {
                            return <a className="ShowWorkData-tag" key={index}>{value}</a>
                        })
                    }
                </div>
                <div>{data.Date}</div>
            </div> : (<div className="ShowWorkData-container" key="fail"></div>)}

        </div>
    )
}

export default ShowWorkData;
