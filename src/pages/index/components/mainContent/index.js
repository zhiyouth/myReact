import React, {useState, useEffect} from 'react';
import './index.less';
import LogRegister from '../loginRegister';
import Navigation from '../navigation';
import Header from '../header';
import Banner from '../banner';
import Login from '../login';
import axios from 'axios';

function MainContent(props) {
    const [firstLocation, setFirstLocation] = useState('贴吧');
    const [loginFlag, setLoginFlag] = useState(false);
    const {} = props;
    useEffect(() => {
        axios.post('/api/weremember/cgi/register.action',
            {
                data: {
                    nickname: 'haotang',
                    password: 'ra6004RAA',
                    phone: '13243071208',
                    name: 'haotang'
                }
            }
        )
        .then(data => {
            console.log(data, 'data')
        }).catch(err => {
            console.log(err, 'err')
        })
    }, [false])

    return (
        <div className="com-main-content">
            <LogRegister
                setLoginFlag={setLoginFlag}
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
            />}
        </div>
    );
}

export default MainContent;