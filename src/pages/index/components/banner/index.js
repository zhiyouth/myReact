import React, {Component} from 'react';
import './index.less';
import BannerContent from './components/bannerContent';
function Banner(props) {
    const {} = props;
    return (
        <div className="com-banner">
            <BannerContent />
        </div>
    );
}

export default Banner;