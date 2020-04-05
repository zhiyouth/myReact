import React, {Component} from 'react';
import './index.less';
import BannerContent from './components/bannerContent';
import BannerTime from './components/bannerTime';

function Banner(props) {
    const {} = props;
    return (
        <div className="com-banner">
            <div className="com-banner-wrapper">
                <BannerContent />
            </div>
            <BannerTime />
        </div>
    );
}

export default Banner;