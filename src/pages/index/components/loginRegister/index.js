import React, {Component} from 'react';
import './index.less';

function LogRegister(props) {
    const {} = props;
    return (
        <div className="com-login-register">
            <div className="com-login-register-content">
                <a className="login" href="./login.html">登录</a>
                <a className="register" href="#">注册</a>
            </div>
        </div>
    );
}

export default LogRegister;