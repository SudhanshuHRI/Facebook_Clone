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
import DropdownButton from "react-bootstrap/DropdownButton";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
//import PersonAdd from "@mui/icons-material/PersonAdd";
//import Settings from "@mui/icons-material/Settings";
//import Logout from "@mui/icons-material/Logout";

// import MarketPlace from './components/marketplace';

const Home = () => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-white p-0 justify-content-between">
        <Container fluid>
          <Navbar.Brand className=" FB_logo">
            <FaFacebook className="h1" />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 navBarSearchBox"
                aria-label="Search"
              />
              <IoSearch className="navBarSearchBoxIcon" />
            </Form>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="navbarCenterContainer">
                <TabContext value={value}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label={<GoHomeFill className="h4 m-0" />} value="0" />
                    <Tab
                      label={<FaUserFriends className="h4 m-0" />}
                      value="1"
                    />
                    <Tab
                      label={<FaFacebookMessenger className="h4 m-0" />}
                      value="2"
                    />
                    <Tab
                      label={<MdOutlineOndemandVideo className="h4 m-0" />}
                      value="3"
                    />
                    <Tab
                      label={<RiNotification2Fill className="h4 m-0" />}
                      value="4"
                    />
                  </TabList>
                </TabContext>
              </Nav.Link>
            </Nav>
            <div className="NavbarUserProfileContainer">
              {/* <Image src="/unnamed.jpg" roundedCircle width={40} />
              <div className="dropdownContainer">
               <div>
                <ul>
                  <li>
                  <Image src="/unnamed.jpg" roundedCircle width={40} />
                  <p>Sudhanshu</p>
                  </li>
                  <li>
                    <button className="btn">Logout</button>
                  </li>
                </ul>
          
               </div>
              </div> */}
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Image src="/unnamed.jpg" roundedCircle width={40} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
               // onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
               
                <div className="p-3">
                    <Image src="/unnamed.jpg" roundedCircle width={150} />
                    <p className="text-center m-0 p-0"><b>Sudhanshu Srivastava</b></p>
                  </div>

                <Divider />

                <MenuItem onClick={handleClose} className="justify-content-center">Logout</MenuItem>
              </Menu>
            </div>
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
