import React, {useState, useRef} from 'react';
import './index.less';
import {getLogin} from '../../actions'

function Login(props) {
    const {setLoginFlag, setHasLogin, setGolbalNickname} = props;
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const inputNickname = useRef('inputNickname');
    const inputPassword = useRef('inputPassword');
    function handleMaskClick() {
        setLoginFlag(false);
    }

    function handleChangeNickname() {
        setNickname(inputNickname.current.value);
    }
    function handleChangePassword() {
        setPassword(inputPassword.current.value);
    }

    function handleLoginButtonClick() {
        toLogin({
            nickname,
            password
        })
    }

    function toLogin({
        nickname = '',
        password = ''
    }) {
        getLogin({
            nickname,
            password
        }).then((data) => {
            if (data.data.code === "WR_CODE_0000") {
                setHasLogin(true);
                inputNickname.current.value = '';
                inputPassword.current.value = '';
                setLoginFlag(false);
                setGolbalNickname(data.data.obj.nickname)
            } else if (data.data.code === "WR_CODE_0005") {
                console.log(data.data.msg)
            }
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <div className="com-login">
            <div className="mask" onClick={handleMaskClick}></div>
            <div className="login">
                <div className="header">
                    <div className="logo_img"></div>
                    <div className="word">账号密码登录</div>
                </div>
                <div className="login_content">
                    <div className="username">
                        <div className="username_word">账号</div>
                        <input className="username_input" ref={inputNickname} placeholder="" onChange={handleChangeNickname} />
                    </div>
                    <div className="password">
                        <div className="password_word">密码</div>
                        <input className="password_input" ref={inputPassword} placeholder="" onChange={handleChangePassword} />
                    </div>
                    <div className="is_true_man">
                        <div className="is_true_man_word">验证码</div>
                        <div className="is_true_man_content">
                            <input className="is_true_man_content_code" />
                            <div className="is_true_man_content_num">
                                <span>7</span>
                                <span>3</span>
                                <span>6</span>
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="auto_login__forget_password">
                        <div className="auto_login">
                            <input type="checkbox" />
                            <div>下次自动登录</div>
                        </div>
                        <a className="forget_password" href="#">找回密码</a>
                    </div>
                    <div className="login_button" onClick={handleLoginButtonClick}></div>
                    <div className="ad">有问题学长来帮你</div>
                </div>
                <div className="footer">
                    <div className="login_by_code"></div>
                    <div className="login_by_qq"></div>
                    <div className="login_by_wx"></div>   
                    <div className="register"></div>
                </div>
            </div>
        </div>
    );
}

export default Login;