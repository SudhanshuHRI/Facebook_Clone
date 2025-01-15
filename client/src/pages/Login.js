import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Login = () => {

    const navigate = useNavigate();
    return (
        <div className="container loginBody">
            <div className="row cstm_row">
                <div className="col-12 col-lg-6 col-sm-12 diiv">
                    <div className='left'>
                        <img src='/Logo.png' height={50} width={200}  alt='logo' />
                        <h3>
                            Facebook helps you connect and share with the people in your life.
                        </h3>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-sm-12 diiv2">

                    <Form className='loginform'>
                        <Row className=''>
                            <Col className=''>
                                <Form.Control type="email" placeholder="Email address or phone no" />
                            </Col>

                        </Row>
                        <Row className='mt-3'>
                            <Col className=''>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <div className='buttonDiv '>
                                <button className='btn btn-primary w-100 p-2' onClick={()=>navigate("/home")}>Log In</button>
                            </div>

                        </Row>
                        <Row className='mt-3'>
                            <div className=' text-center forgotLink' >
                                <a href="/forgot" >Forgotten password?</a>
                            </div>
                        </Row>
                        <hr />
                        <Row className='mt-3 text-center'>
                            <div className='buttonDiv'>
                                <button className='btn  w-60 p-2' style={{ backgroundColor: "#42B72A", color: "white" }} onClick={()=>navigate("/newUser")}>Create new account</button>
                            </div>

                        </Row>
                    </Form>
                    <div className='afterform w-100 text-center mt-3'>
                        <p>{"   "}<Link href="#">Create a Page</Link>{"   "}for a celebrity, brand, business</p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Login;