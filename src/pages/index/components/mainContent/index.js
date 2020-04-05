import React, {useState} from 'react';
import './index.less';
import LogRegister from '../loginRegister';
import Navigation from '../navigation';
import Header from '../header';
import Banner from '../banner';
function MainContent(props) {
    const [firstLocation, setFirstLocation] = useState('贴吧');
    const {} = props;
    return (
        <div className="com-main-content">
            <LogRegister />
            <Navigation
                firstLocation={firstLocation}
                setFirstLocation={setFirstLocation}
            />
            <Header />
            <Banner />
        </div>
    );
}

export default MainContent;