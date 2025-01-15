

import Slider from "react-slick";
import React from "react";
const HomeComp = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
  return (
    <div>
      <div className="row">
        <div className="col-3">
        <div>
            <div>
                <ul className="sideList">
                    <li className='d-flex'>
                        <img src='/resources/unnamed.jpg' height={25} width={25} />
                        <h5>Sudhansu Srivastava</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/couple.png' height={25} width={25} />
                        <h5>Friends</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/time.png' height={25} width={25} />
                        <h5>Memories</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/save.png' height={25} width={25} />
                        <h5>Saved</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/group.png' height={25} width={25} />
                        <h5>Groups</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/video.png' height={25} width={25} />
                        <h5>Video</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/market.png' height={25} width={25} />
                        <h5>Marketplace</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/feeds.png' height={25} width={25} />
                        <h5>Feeds</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/star.png' height={25} width={25} />
                        <h5>Events</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/bars.png' height={25} width={25} />
                        <h5>Ads manager</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/climate.png' height={25} width={25} />
                        <h5>Climate Science Center</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/target.png' height={25} width={25} />
                        <h5>Crisis Response</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/feeds.png' height={25} width={25} />
                        <h5>Facebook Pay</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/heart2.png' height={25} width={25} />
                        <h5>Fundraisers</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/gaming2.png' height={25} width={25} />
                        <h5>Gaming video</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/messangerKids.png' height={25} width={25} />
                        <h5>Messenger</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/messangerKids.png' height={25} width={25} />
                        <h5>Messenger Kids</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/flag.png' height={25} width={25} />
                        <h5>Pages</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/game.png' height={25} width={25} />
                        <h5>Play games</h5>
                    </li>
                    <li className='d-flex'>
                        <img src='/resources/recent.png' height={25} width={25} />
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
        </div>
        </div>
        <div className="col-6">
        <div style={{border:'1px solid black'}}>
            <div className='slider'>
                <Slider {...settings}>
                    <div className="singleslider">
                        <div style={{backgroundImage:"url('/images.jpg')"}}>
                            <img src='/unnamed.jpg' alt="img" height={40} width={40} />
                            <p>Name</p>
                        </div>
                    </div>
                    <div className="singleslider">
                        <div style={{backgroundImage:"url('/img.png')"}}>
                            <img src='/unnamed.jpg' alt="img" height={40} width={40}/>
                            <p>Name</p>
                        </div>
                    </div>
                    <div className="singleslider">
                        <div style={{backgroundImage:"url('/img1.webp')"}}>
                            <img src='/unnamed.jpg' alt="img" height={40} width={40}/>
                            <p>Name</p>
                        </div>
                    </div>
                    <div className="singleslider">
                        <div style={{backgroundImage:"url('/img2.jpg')"}}>
                            <img src='/unnamed.jpg' alt="img" height={40} width={40}/>
                            <p>Name</p>
                        </div>
                    </div>
                    <div className="singleslider">
                        <div style={{backgroundImage:"url('/img3.jpg')"}}>
                            <img src='/unnamed.jpg' alt="img" height={40} width={40}/>
                            <p>Name</p>
                        </div>
                    </div>
                    <div className="singleslider"> 
                        <div style={{backgroundImage:"url('/img4.jpg')"}}>
                            <img src='/unnamed.jpg' alt="img" height={40} width={40}/>
                            <p>Name</p>
                        </div>
                    </div>
                </Slider>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        </div>
        <div className="col-3">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
