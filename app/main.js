'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from "!style!css!bootstrap/dist/css/bootstrap.css";
import MyHeader from "./components/MyHeader" ;

/*
var React = require('react');
var ReactDOM = require('react-dom');
var Bootstrap = require("!style!css!bootstrap/dist/css/bootstrap.css");
*/
/*
class MyHeader extends React.Component{
    render(){
        return(
            <div>React Simple Starter</div>
        )
    }
}
*/
class KanbanApplication extends React.Component{
    render(){
        var message = 
        'Hello World! React has been successfully running for seconds.';

        return <div className="panel panel-default">
                    <MyHeader/>
                <div className="panel-body">
                    {message}
                </div>
                </div>
    }
};


ReactDOM.render(
    <KanbanApplication>
    </KanbanApplication>,
    document.getElementById('root')
);