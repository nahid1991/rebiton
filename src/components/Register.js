import React, {Component} from 'react';
import Header from "./Header";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {code: "",
            email: "",
            password: "",
            agreement: false
        };
    }

    handleChange(event) {
        if(event.target.name === "agreement") {
            this.setState({agreement: !this.state.agreement});
        } else {
            switch (event.target.name) {
                case "code":
                    this.setState({code: event.target.value});
                    break;
                case "email":
                    this.setState({email: event.target.value});
                    break;
                case "password":
                    this.setState({password: event.target.value});
                    break;
                default:
                    break;
            }
        }
    };

    handleRegistrationSubmission(event) {
        event.preventDefault();
        axios.post("http://localhost:8000/api/v1/register", this.state)
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(err) {
                alert("something went wrong!");
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <Header loggedIn={"false"}/>
                <Container fluid={"true"}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Register</Card.Title>
                                    <Form>
                                        <Form.Group controlId="formBasicText">
                                            <Form.Label>Code</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your code" value={this.state.code}
                                                          onChange={this.handleChange.bind(this)} name={"code"}/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" value={this.state.email}
                                                          onChange={this.handleChange.bind(this)} name={"email"}/>
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" value={this.state.password}
                                                          onChange={this.handleChange.bind(this)} name={"password"}/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="I agree to the terms and conditions." value={this.state.agreement}
                                                        onChange={this.handleChange.bind(this)} name={"agreement"}/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" disabled={
                                            this.state.code === "" || this.state.email === "" || this.state.password === ""
                                            || this.state.agreement === false} onClick={this.handleRegistrationSubmission.bind(this)}>
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
