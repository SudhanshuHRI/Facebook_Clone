import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
import Dropdown from "react-bootstrap/Dropdown";
// import MarketPlace from './components/marketplace';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <div>
      <div>
        <div>
          <nav className="d-flex justify-content-between p-1">
            {/* logo and search box */}
            <div className="d-flex align-items-center logoDiv">
              <div>
                <span className="fb-logo">
                  <FaFacebook />
                </span>
              </div>

              <div className="searchBox">
                <span>
                  <IoSearch />
                </span>
                <input type="text" placeholder="Search Facebook" />
              </div>
            </div>

            {/* tabs section */}
            <div>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tooltip title="Home">
                  <Tab label={<GoHomeFill />} className="tabIcons" />
                </Tooltip>
                <Tooltip title="Video">
                  <Tab
                    label={<MdOutlineOndemandVideo />}
                    className="tabIcons"
                  />
                </Tooltip>
                <Tooltip title="Messanger">
                  <Tab label={<FaFacebookMessenger />} className="tabIcons" />
                </Tooltip>
                <Tooltip title="Friends">
                  <Tab label={<FaUserFriends />} className="tabIcons" />
                </Tooltip>
                <Tooltip title="Notifications">
                  <Tab label={<RiNotification2Fill />} className="tabIcons" />
                </Tooltip>
              </Tabs>
            </div>

            {/* navbar icons */}

            <div className="navRightDiv">
              {/* <Tooltip title='Menu'>
                                <span className='navRight '><TbGridDots /></span>
                            </Tooltip> */}
              {/* <Tooltip title='Messenger'>
                                <span className='navRight'><FaFacebookMessenger /></span>
                            </Tooltip> */}
              {/* <Tooltip title='Notifications'>
                                <span className='navRight'><RiNotification2Fill /></span>
                            </Tooltip> */}
              <Tooltip title="Account">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <span className=" useimg">
                      <img src="/resources/unnamed.jpg" alt="userimg" />
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Tooltip>
            </div>
          </nav>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
