import React from 'react'; /*{ Component }*/ 
import { Link } from 'react-router-dom';
import useClass from './../hooks/add-class-body';
//import components reactstrap
import {
    Container, 
    Col, 
    Row,
    Form,
    Card, 
    CardBody, 
    Input, 
    InputGroup,
    Button
} from 'reactstrap';


const Login =  (props) => {

    /**
     * handleLogin: Arrow function que simula o login
     */
    const handleLogin = () => {
        console.log('Make http request here...')
    }

    //utilizando o hook que adiciona ou não classes css a tag body
    //aplica a classe ao body e o app.css tem uma estilização especifica para essa classe
    useClass('bg-blue');
    return (
        <div className="login mt-5 flex-row align-items-center">
          <Container>
              <Row className="justify-content-center">
                  <Col md="6">
                    <Card>
                        <CardBody>
                            <Form>
                                <h1>Login</h1>
                                <p>Enter e-mail and password to access. 
                                    New ? <Link to="/register">Sign-up</Link>
                                </p>
                                <InputGroup className="mb-3">
                                    <Input type="email" placeholder="E-mail"/>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input type="password" placeholder="Password"/>
                                </InputGroup>
                                <InputGroup>
                                    <Button outline color="primary" onClick={handleLogin} >Submit</Button>
                                </InputGroup>
                                <InputGroup>
                                    <Link to="/forgot">
                                        <Button color="link">Forgot Password ?</Button>
                                    </Link>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                  </Col>
              </Row>
          </Container>
        </div>
     )

}


export default Login;