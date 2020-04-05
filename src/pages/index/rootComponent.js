import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import MainContent from './components/mainContent';

class Myreact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-content">
                <MainContent />
            </div>
        );
    }
}
var myDiv = document.createElement('div');
myDiv.id = 'root';
ReactDOM.render(
    <Myreact />,
    myDiv
);
document.body.appendChild(myDiv)