import React, {useState, useEffect} from 'react';
import './index.less';
import LogRegister from '../loginRegister';
import Navigation from '../navigation';
import Header from '../header';
import Banner from '../banner';
import Login from '../login';
import Register from '../register';

function MainContent(props) {
    const [firstLocation, setFirstLocation] = useState('贴吧');
    const [loginFlag, setLoginFlag] = useState(false);
    const [registerFlag, setRegisterFlag] = useState(false);
    const [hasLogin, setHasLogin] = useState(false);
    const [golbalNickname, setGolbalNickname] = useState(false);
    return (
        <div className="com-main-content">
            <LogRegister
                setLoginFlag={setLoginFlag}
                setRegisterFlag={setRegisterFlag}
                hasLogin={hasLogin}
                golbalNickname={golbalNickname}
            />
            <Navigation
                firstLocation={firstLocation}
                setFirstLocation={setFirstLocation}
            />
            <Header />
            <Banner />
            {loginFlag &&
            <Login
                setLoginFlag={setLoginFlag}
                setHasLogin={setHasLogin}
                setGolbalNickname={setGolbalNickname}
            />}
            {registerFlag &&
            <Register
                setRegisterFlag={setRegisterFlag}
            />
            }
        </div>
    );
}

export default MainContent;