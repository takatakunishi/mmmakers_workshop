import React from 'react';
import '../../styles/atoms/Tosignup.css';
import { useHistory } from 'react-router-dom';

const Tosignup = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: '/signup',
            state: {
            }
        });
    };
    return (
        <div className="Tosignup" onClick={handleClick}>
            まだ登録していない方はこちら
        </div>
    );
}

export default Tosignup;
