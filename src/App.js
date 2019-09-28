import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import './styles/App.css';
import { withTranslation, Trans } from "react-i18next";
import Header from "./components/Header";
import {Card, Col, Container, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class App extends Component {
  render() {
      const { t, i18n } = this.props;
      return (
          <div className='App'>
              <Header loggedIn={"false"}/>
              <Container fluid="true">
                  <Row>
                      <Col><Card>
                          <Card.Body>
                              <Card.Title>Login</Card.Title>
                              <Card.Text>
                                  Login to your account.
                              </Card.Text>
                              <Link to={"login"} className={"btn btn-lg btn-primary"}>Login</Link>
                          </Card.Body>
                      </Card></Col>
                      <Col><Card>
                          <Card.Body>
                              <Card.Title>Register</Card.Title>
                              <Card.Text>
                                  Don't have an account? Create one by clicking in the button below.
                              </Card.Text>
                              <Link to={"register"} className={"btn btn-lg btn-secondary"}>Register</Link>
                          </Card.Body>
                      </Card></Col>
                  </Row>
              </Container>
          </div>
      );
  }
}

export default hot(module)(withTranslation("translations")(App));
