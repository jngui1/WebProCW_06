import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
    render() {
        return (
        	<h1 id="hello">Hello, {this.props.name}!</h1>
        );
    }
}

export default HelloWorld;