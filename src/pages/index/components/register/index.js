import React, {useState, useRef} from 'react';
import './index.less';
import {getRegister} from '../../actions'

function Register(props) {
    const {setRegisterFlag} = props;
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [phone, setPhone] = useState(0);
    const inputNickname = useRef('inputNickname');
    const inputPassword = useRef('inputPassword');
    const inputRePassword = useRef('inputRePassword');
    const inputPhone = useRef('inputPhone');
    function handleMaskClick() {
        setRegisterFlag(false);
    }

    function handleChangeNickname() {
        setNickname(inputNickname.current.value);
    }
    function handleChangePassword() {
        setPassword(inputPassword.current.value);
    }
    function handleChangeRePassword() {
        setRePassword(inputPassword.current.value);
    }
    function handleChangePhone() {
        setPhone(inputPassword.current.value);
    }

    function handleRegisterButtonClick() {
        toRegister({
            nickname,
            password,
            phone
        })
    }

    function toRegister({
        nickname = '',
        password = '',
        phone = 0
    }) {
        if (password !== rePassword) {
            console.log('密码和重复密码不一致');
            return;
        }
        getRegister({
            nickname,
            password,
            phone
        }).then((data) => {
            if (data.data.code === "WR_CODE_0000") {
                inputNickname.current.value = '';
                inputPassword.current.value = '';
                setRegisterFlag(false);
            } else if (data.data.code === "WR_CODE_0005") {
                console.log(data.data.msg)
            }
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <div className="com-register">
            <div className="mask" onClick={handleMaskClick}></div>
            <div className="register">
                <div className="header">
                    <div className="logo_img"></div>
                    <div className="word">注册</div>
                </div>
                <div className="register_content">
                    <div className="username">
                        <div className="username_word">用户名</div>
                        <input className="username_input" ref={inputNickname} placeholder="" onChange={handleChangeNickname} />
                    </div>
                    <div className="password">
                        <div className="password_word">密码</div>
                        <input className="password_input" ref={inputPassword} placeholder="" onChange={handleChangePassword} />
                    </div>
                    <div className="re_password">
                        <div className="re_password_word">重复密码</div>
                        <input className="re_password_input" ref={inputRePassword} placeholder="" onChange={handleChangeRePassword} />
                    </div>
                    <div className="phone">
                        <div className="phone_word">手机号</div>
                        <input className="phone_input" ref={inputPhone} placeholder="" onChange={handleChangePhone} />
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
                    <div className="agree_me">
                        <div className="empty_div"></div>
                        <div className="agree_me_content">
                            <input type="checkbox" />
                            <div>同意本站隐私保护权益</div>
                        </div>
                    </div>
                    <div className="register_button" onClick={handleRegisterButtonClick}></div>
                    <div className="ad">有问题学长来帮你</div>
                </div>
                <div className="footer">
                    <div className="login_by_code"></div>
                    <div className="login_by_qq"></div>
                    <div className="login_by_wx"></div>   
                    <div className="footer_register"></div>
                </div>
            </div>
        </div>
    );
}

export default Register;