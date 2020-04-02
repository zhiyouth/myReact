import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'
class Myreact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-react">Myreact</div>
        );
    }
}
var myDiv = document.createElement('div');
myDiv.id = 'root';
myDiv.innerHTML = '我是DIV';
ReactDOM.render(
    <Myreact />,
    myDiv
);
document.body.appendChild(myDiv)