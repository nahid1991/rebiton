import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import { withTranslation, Trans } from "react-i18next";
import {Link} from "react-router-dom";
import {hot} from "react-hot-loader";

class Header extends Component {
    render() {
        let {loggedIn} = this.props;

        function loggedInUserNavlinks() {
            return loggedIn === "false" ? (<Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav><Link to="/">Home</Link></Nav>
                    <Nav>&nbsp;|&nbsp;</Nav>
                    <Nav><Link to="/login">Login</Link></Nav>
                    <Nav>&nbsp;|&nbsp;</Nav>
                    <Nav><Link to="register">Register</Link></Nav>
                </Nav>
            </Navbar.Collapse>) : null;
        }

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand><Link to="/">Rebiton</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {loggedInUserNavlinks()}
                </Navbar>
            </div>
        );
    }
}

export default hot(module)(withTranslation("translations")(Header));
