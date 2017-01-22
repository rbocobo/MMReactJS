'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from "!style!css!bootstrap/dist/css/bootstrap.css";
import MyHeader from "./components/MyHeader" ;
import MyFooter from "./components/MyFooter" ;
import MyContent from "./components/MyContent";
import styles from "./css/main.css";

class KanbanApplication extends React.Component{
    render(){
        return (
            <div className="container">
                    <MyHeader/>
                    <MyContent/>
                    <MyFooter/>
            </div>
        );
    }
};


ReactDOM.render(
    <KanbanApplication>
    </KanbanApplication>,
    document.getElementById('root')
);