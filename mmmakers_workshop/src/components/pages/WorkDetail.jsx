import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/pages/Home.css';
import WorkDetailTemplate from '../templates/WorkDetailTemplate'
import { getAllWorksRequest } from '../../actions/Works/ActionCreater'

const WorkDetail = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllWorksRequest());
    }, [dispatch])

    return (
        <div className="WorkDetail">
            <WorkDetailTemplate />
        </div>
    );
}

export default WorkDetail;
