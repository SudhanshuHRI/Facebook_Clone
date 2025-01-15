import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import "../styles/forgotPassword.css";
import {useNavigate} from "react-router-dom"


const ForgotPassword = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="ForgotPasswordContainer">
        <Navbar expand="lg" className=" bg-light">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src="/Logo.png" alt="logo" width="20%" />
            </Navbar.Brand>

            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Email or phone"
                className="me-2"
                aria-label="Search"
                
              />
              <Form.Control
                type="password"
                placeholder="Password"
                className="me-2"
                aria-label="Search"
              />
              <Button className="btn btn-primary">Login</Button>
            </Form>
          </Container>
        </Navbar>
        <section className="forgotFormContainer">
          <Card>
            <div className="p-3">
              <h4>Find Your Account</h4>
            </div>
            <hr />
            <div className="p-3">
              <p>
                Please enter your email address or mobile number to search for
                your account.
              </p>
              <Form.Control
                type="text"
                placeholder="Email address or mobile number"
                className="me-3 forgotInbox"
                aria-label="Search"
              />
            </div>
            <hr />
            <div className="p-3 d-flex justify-content-end">
              <button className="btn btn-secondary" onClick={()=>navigate("/")}>Cancel</button>.
              <button className="btn btn-primary">Search</button>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
