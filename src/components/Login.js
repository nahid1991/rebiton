import React, {Component} from 'react';
import Header from "./Header";
import Container from "react-bootstrap/Container";
import {Card, Form, Button, Row, Col} from "react-bootstrap";

class Login extends Component {
    render() {
        return (
            <div>
                <Header loggedIn={"false"}/>
                <Container fluid={"true"}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Login</Card.Title>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"/>
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
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

export default Login;
