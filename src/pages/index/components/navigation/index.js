import React, {useState} from 'react';
import './index.less';

function Navigation(props) {
    const {firstLocation, setFirstLocation} = props;
    return (
        <div className="com-navigation">
            <div className="home-page">首页</div>
            <div className="bridge">></div>
            <div>{firstLocation}</div>
        </div>
    );
}

export default Navigation;