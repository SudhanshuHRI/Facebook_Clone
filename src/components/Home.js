import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
                    <nav className='d-flex justify-content-between p-1'>
                        {/* logo and search box */}
                        <div className='d-flex align-items-center logoDiv'>
                            <div>
                                <span className='fb-logo'><FaFacebook /></span>
                            </div>

                            <div className='searchBox'>
                                <span><IoSearch /></span>
                                <input type="text" placeholder='Search Facebook' />
                            </div>

                        </div>

                        {/* tabs section */}
                        <div>
                            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                                <Tab label={<GoHomeFill />} className='tabIcons' />
                                <Tab label={<MdOutlineOndemandVideo />} className='tabIcons' />
                                <Tab label={<AiOutlineShop />} className='tabIcons' />
                                <Tab label={<RiGroup2Line />} className='tabIcons' />
                                <Tab label={<FaGamepad />} className='tabIcons' />
                            </Tabs>

                        </div>

                        {/* navbar icons */}

                        <div className='navRightDiv'>
                            <span className='navRight '><TbGridDots /></span>
                            <span className='navRight'><FaFacebookMessenger /></span>
                            <span className='navRight'><RiNotification2Fill /></span>
                            <span className=' useimg'><img src="/resources/unnamed.jpg" alt="userimg" /></span>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='contailer-fluid'>
                <div className='row'>
                    <div className='col-3'>
                        <div>
                            <ul>
                                <li className='d-flex'>
                                    <img src='/resources/unnamed.jpg' height={40} width={40}/>
                                    <h5>Sudhansu Srivastava</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/couple.png' height={40} width={40}/>
                                    <h5>Friends</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/time.png' height={40} width={40}/>
                                    <h5>Memories</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/save.png' height={40} width={40}/>
                                    <h5>Saved</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/group.png' height={40} width={40}/>
                                    <h5>Groups</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/video.png' height={40} width={40}/>
                                    <h5>Video</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/market.png' height={40} width={40}/>
                                    <h5>Marketplace</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/feeds.png' height={40} width={40}/>
                                    <h5>Feeds</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/star.png' height={40} width={40}/>
                                    <h5>Events</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/bars.png' height={40} width={40}/>
                                    <h5>Ads manager</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/climate.png' height={40} width={40}/>
                                    <h5>Climate Science Center</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/target.png' height={40} width={40}/>
                                    <h5>Crisis Response</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/feeds.png' height={40} width={40}/>
                                    <h5>Facebook Pay</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/heart2.png' height={40} width={40}/>
                                    <h5>Fundraisers</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/gaming2.png' height={40} width={40}/>
                                    <h5>Gaming video</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/messangerKids.png' height={40} width={40}/>
                                    <h5>Messenger</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/messangerKids.png' height={40} width={40}/>
                                    <h5>Messenger Kids</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/flag.png' height={40} width={40}/>
                                    <h5>Pages</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/game.png' height={40} width={40}/>
                                    <h5>Play games</h5>
                                </li>
                                <li className='d-flex'>
                                    <img src='/resources/recent.png' height={40} width={40}/>
                                    <h5>Recent ad activity</h5>
                                </li>
                             
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <ul>
                                <li>Shortcut</li>
                            </ul>
                        </div>
                        <div>
                        
                        </div>

                    </div>
                    <div className='col-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className='col-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;