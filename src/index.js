
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Create the div who gonna receive the app
function createDiv() {
    const element = document.createElement('div');
    element.id = "root";
    return element;
}
//Insertion of the div in the html
document.body.appendChild(createDiv());

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

