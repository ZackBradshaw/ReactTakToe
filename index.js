import React from "react";
import ReactDom from "react-dom";
import './index.css';


const reactDom = require("react-dom");

class Square extends React.Component {
    render() {
    return (
        <button className="square">
            {this. props.value}
        </button>

        );
    }
} 

class Board extends React.Component {
    renderSquare(i) {
        return <Square />
    }
}