import React, {Component} from 'react';
import './index.less';

function Login(props) {
    const {setLoginFlag} = props;
    function handleMaskClick() {
        setLoginFlag(false);
    }
    return (
        <div className="com-login">
            <div className="mask" onClick={handleMaskClick}></div>
        </div>
    );
}

export default Login;