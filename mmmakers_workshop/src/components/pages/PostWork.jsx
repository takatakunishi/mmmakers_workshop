import React, { useEffect } from 'react'
import '../../styles/pages/Home.css';
import PostWorkTemplate from '../templates/PostWorkTemplate'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Load from '../molecules/Load'

const PostWork = () => {
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
        <div className="PostWork">
            <PostWorkTemplate />
            <Load showWord={"Uploading"} />
        </div>
    );
}

export default PostWork;
