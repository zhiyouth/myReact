import React, {Component} from 'react';
import './index.less';

function Tab(props) {
    const {data, renderContent} = props;
    return (
        <div className="my-react-tab">
            <div className="my-react-tab-header">
                {
                    data.map((item, index) => {
                        return (
                            <div
                                className={`tab tab-${index}`}
                                key={index}
                            >
                                {item.text ? item.text : null}
                            </div>
                        );
                    })
                }
            </div>
            {renderContent && renderContent()}
        </div>
    );
}

export default Tab;