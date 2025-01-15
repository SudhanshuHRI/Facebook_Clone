import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "../styles/forgotPassword.css"


const ForgotPassword = () => {
    return (<>
        <div className='forgotMainContainer'>
            <Navbar className=" justify-content-between" style={{color:"white"}}>

                <img
                    src="/Logo.png"
                    width="15%"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />

                <Form >
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="email"
                                placeholder="Email or Phone"
                                className=" "
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                className=" "
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Log in</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
        </div>

    </>);
}

export default ForgotPassword;