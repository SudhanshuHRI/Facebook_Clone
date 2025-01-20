import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FaFacebook } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { RiGroup2Line } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import HomeComp from "./components/homecomp";
import GameComp from "./components/gamecomp";
import GroupComp from "./components/groupscomp";
import Marketplace from "./components/marketplace";
import VideoComp from "./components/videocomp";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

// import MarketPlace from './components/marketplace';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="d-flex">
            <FaFacebook className="h3" />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <IoSearch />
            </Form>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <TabContext value={value}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label={<GoHomeFill className="h4" />} value="0" />
                    <Tab label={<FaUserFriends className="h4" />} value="1" />
                    <Tab
                      label={<FaFacebookMessenger className="h4" />}
                      value="2"
                    />
                    <Tab
                      label={<MdOutlineOndemandVideo className="h4" />}
                      value="3"
                    />
                    <Tab
                      label={<RiNotification2Fill className="h4" />}
                      value="4"
                    />
                  </TabList>
                </TabContext>
              </Nav.Link>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Image src="/unnamed.jpg" roundedCircle width={40} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="contailer-fluid">
        {value == 0 ? (
          <HomeComp />
        ) : value == 1 ? (
          <VideoComp />
        ) : value == 2 ? (
          <Marketplace />
        ) : value == 3 ? (
          <GroupComp />
        ) : value == 4 ? (
          <GameComp />
        ) : null}
      </div>
    </>
  );
};

export default Home;
