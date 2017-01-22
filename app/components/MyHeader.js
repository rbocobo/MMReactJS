
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class MyHeader extends React.Component{
    render(){
        return(
            <Navbar fixedTop inverse>
                <Navbar.Header>
                Hello World
                </Navbar.Header>
            </Navbar>
        );
    }
};