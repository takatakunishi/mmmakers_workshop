import React, { useEffect } from 'react'
import '../../styles/pages/Home.css';
import WorkDetailTemplate from '../templates/WorkDetailTemplate'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Load from '../molecules/Load'


const WorkDetail = () => {
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
    useEffect(() => {
        loginCheck();
    })

    return (
        <div className="WorkDetail">
            <WorkDetailTemplate />
            <Load showWord={"Loading"} />
        </div >
    );
}

export default WorkDetail;
