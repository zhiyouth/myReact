import React, {Component} from 'react';
import './index.less';

function LogRegister(props) {
    const {setLoginFlag, setRegisterFlag, hasLogin, golbalNickname} = props;
    function handleLoginClick() {
        setLoginFlag(true);
    }
    function handleRegisterClick() {
        setRegisterFlag(true);
    }
    return (
        <div className="com-login-register">
            {
                !hasLogin ?
                    <div className="com-login-register-content">
                        <div className="login" onClick={handleLoginClick}>登录</div>
                        <div className="register" onClick={handleRegisterClick} >注册</div>
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