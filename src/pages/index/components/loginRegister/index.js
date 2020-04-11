import React, {Component} from 'react';
import './index.less';

function LogRegister(props) {
    const {setLoginFlag, hasLogin, golbalNickname} = props;
    function handleLoginClick() {
        setLoginFlag(true);
    }
    return (
        <div className="com-login-register">
            {
                !hasLogin ?
                    <div className="com-login-register-content">
                        <div className="login" onClick={handleLoginClick}>登录</div>
                        <a className="register" href="#">注册</a>
                    </div>
                    :
                    <div className="com-login-register-content">
                        <div>你好，{golbalNickname}</div>
                    </div>
            }
        </div>
    );
}

export default LogRegister;