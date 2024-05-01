import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Login = () => {
    return (
        <div className="container">
            <div className="row cstm_row">
                <div className="col-6 diiv">
                    <div>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg' height={200} width={200}/>
                        <h1>
                        Facebook helps you connect and share with the people in your life.
                        </h1>
                    </div>
                </div>
                <div className="col-6 diiv ">
                    {/* <form className='d-grid'>
                        <input type='email' placeholder='Email address or phone number'/>
                        <input type='password' placeholder='Password'/>
                        <button className='btn btn-primary'>Login</button>
                        <Link href="#">Forgotten password?</Link>
                        <hr />
                        <div>
                            <button className='btn btn-success'>Create new account</button>
                        </div>
                    </form> */}
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <Row>
                            <button className='btn btn-primary'>Log In</button>
                        </Row>
                        <Row>
                            <div>
                                <Link href="#">Forgotten password?</Link>
                            </div>
                        </Row>
                        <hr />
                        <Row>
                            <button className='btn  btn-success'>Create new account</button>
                        </Row>
                    </Form>
                </div>
            </div>


        </div>
    );
}

export default Login;