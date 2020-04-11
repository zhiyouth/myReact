import React, {useState, useEffect} from 'react';
import './index.less';
import LogRegister from '../loginRegister';
import Navigation from '../navigation';
import Header from '../header';
import Banner from '../banner';
import Login from '../login';

function MainContent(props) {
    const [firstLocation, setFirstLocation] = useState('贴吧');
    const [loginFlag, setLoginFlag] = useState(false);
    const [hasLogin, setHasLogin] = useState(false);
    const [golbalNickname, setGolbalNickname] = useState(false);
    const {} = props;
    return (
        <div className="com-main-content">
            <LogRegister
                setLoginFlag={setLoginFlag}
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
        </div>
    );
}

export default MainContent;