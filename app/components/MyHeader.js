
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class MyHeader extends React.Component{
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Header</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
};