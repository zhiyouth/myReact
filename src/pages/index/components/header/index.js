import React, {Component} from 'react';
import './index.less';

function Header(props) {
    const {} = props;
    return (
        <div className="com-header">
            <img className="logo" src={require('./images/logo.png').default} />
            <div className="search-content">
                <input className="search-input" placeholder="" />
                <div className="btn"></div>
            </div>
        </div>
    );
}

export default Header;