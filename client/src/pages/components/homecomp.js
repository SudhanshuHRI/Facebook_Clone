import Slider from "react-slick";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import "../../styles/homeComp.css";
import { BsGlobeAmericas } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";

const HomeComp = () => {
  var settings = {
    dots: false,
    //infinite: true,
    // speed: 200,
    slidesToShow: 4,
    arrows: false,
    //slidesToScroll: 1,
    
  };


  return (
    <div className="container-fluid homeComponentContainer">
      <div className="row">
        <div className="col-3">
          <div>
            <div>
              <ul className="sideList">
                <li className="d-flex">
                  <img src="/resources/unnamed.jpg" height={25} width={25} />
                  <h5>Sudhansu Srivastava</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/couple.png" height={25} width={25} />
                  <h5>Friends</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/time.png" height={25} width={25} />
                  <h5>Memories</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/save.png" height={25} width={25} />
                  <h5>Saved</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/group.png" height={25} width={25} />
                  <h5>Groups</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/video.png" height={25} width={25} />
                  <h5>Video</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/market.png" height={25} width={25} />
                  <h5>Marketplace</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/feeds.png" height={25} width={25} />
                  <h5>Feeds</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/star.png" height={25} width={25} />
                  <h5>Events</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/bars.png" height={25} width={25} />
                  <h5>Ads manager</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/climate.png" height={25} width={25} />
                  <h5>Climate Science Center</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/target.png" height={25} width={25} />
                  <h5>Crisis Response</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/feeds.png" height={25} width={25} />
                  <h5>Facebook Pay</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/heart2.png" height={25} width={25} />
                  <h5>Fundraisers</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/gaming2.png" height={25} width={25} />
                  <h5>Gaming video</h5>
                </li>
                <li className="d-flex">
                  <img
                    src="/resources/messangerKids.png"
                    height={25}
                    width={25}
                  />
                  <h5>Messenger</h5>
                </li>
                <li className="d-flex">
                  <img
                    src="/resources/messangerKids.png"
                    height={25}
                    width={25}
                  />
                  <h5>Messenger Kids</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/flag.png" height={25} width={25} />
                  <h5>Pages</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/game.png" height={25} width={25} />
                  <h5>Play games</h5>
                </li>
                <li className="d-flex">
                  <img src="/resources/recent.png" height={25} width={25} />
                  <h5>Recent ad activity</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <div className="slider">
              <Slider {...settings}>
                <div className="singleslider p-2">
                  <div
                    style={{ backgroundImage: "url('/unnamed.jpg')" }}
                    className=""
                  >
                    {/* <img
                      src="/unnamed.jpg"
                      alt="img"
                      height={40}
                      width={40}
                      className="storyUserImg ms-2 "
                    /> */}
                    <div className="">
                      <FiPlus className="storyProfileIcon" />
                      <div
                        height={30}
                        width={30}
                        className="border storyProfileDiv"
                      >
                        <p className="text-center pt-4">
                          <b>Create Story</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="singleslider p-2">
                  <div
                    style={{ backgroundImage: "url('/img.png')" }}
                    className="p-2"
                  >
                    <img
                      src="/unnamed.jpg"
                      alt="img"
                      height={40}
                      width={40}
                      className="storyUserImg"
                    />
                  </div>
                </div>
                <div className="singleslider p-2">
                  <div
                    style={{ backgroundImage: "url('/img1.webp')" }}
                    className="p-2"
                  >
                    <img
                      src="/unnamed.jpg"
                      alt="img"
                      height={40}
                      width={40}
                      className="storyUserImg"
                    />
                  </div>
                </div>
                <div className="singleslider p-2">
                  <div
                    style={{ backgroundImage: "url('/img2.jpg')" }}
                    className="p-2"
                  >
                    <img
                      src="/unnamed.jpg"
                      alt="img"
                      height={40}
                      width={40}
                      className="storyUserImg"
                    />
                  </div>
                </div>
                <div className="singleslider p-2">
                  <div
                    style={{ backgroundImage: "url('/img3.jpg')" }}
                    className="p-2"
                  >
                    <img
                      src="/unnamed.jpg"
                      alt="img"
                      height={40}
                      width={40}
                      className="storyUserImg"
                    />
                  </div>
                </div>
                <div className="singleslider p-2">
                  <div
                    style={{ backgroundImage: "url('/img4.jpg')" }}
                    className="p-2"
                  >
                    <img
                      src="/unnamed.jpg"
                      alt="img"
                      height={40}
                      width={40}
                      className="storyUserImg"
                    />
                  </div>
                </div>
              </Slider>
            </div>
            <section className="HomePagePostingContainer">
              <Card className="p-2">
                <div className="d-flex align-item-center justify-content-center mb-2">
                  <img
                    src="/unnamed.jpg"
                    height={40}
                    width={40}
                    className="PostingUserImg"
                  />

                  <Form.Control
                    type="text"
                    placeholder="What's on your mind, Sudhanshu ?"
                    className="PostingUserInput ms-2"
                  />
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-evenly p-3 postingMediaContainer">
                  <div className="d-flex">
                    <img
                      src="/resources/videoPostingIcon.png"
                      height={20}
                      width={20}
                    />
                    <p className="m-0 text-secondary ms-1">
                      <b>Live Video</b>
                    </p>
                  </div>
                  <div className="d-flex align-items-center ">
                    <img
                      src="/resources/picturePostingIcon.png"
                      height={20}
                      width={20}
                    />
                    <p className="m-0 text-secondary ms-1">
                      <b>Photo/video</b>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src="/resources/activityPosingIcon.png"
                      height={20}
                      width={20}
                    />
                    <p className="m-0 text-secondary ms-1">
                      <b>Feeling/activity</b>
                    </p>
                  </div>
                </div>
              </Card>
            </section>
            <section className="postContainer mt-4">
              <Card>
                <Card.Header>
                  <div className="PostProfileContainer">
                    <div>
                      <img
                        src="/5MinLogo.jpg"
                        width={40}
                        alt="img"
                        className="PostingUserImg border"
                      />
                      <div>
                        <div>
                          <b>
                            5-Minute Crafts
                            <LuDot />
                            <a href="#">Follow</a>
                          </b>
                        </div>
                        <div>
                          <span className="h6">57m</span>
                          <LuDot />
                          <BsGlobeAmericas />
                        </div>
                      </div>
                    </div>

                    <div className="postCloseButton">
                      <HiOutlineDotsHorizontal className="me-2" />
                      <IoMdClose />
                    </div>
                  </div>
                </Card.Header>
                <video autoplay loop controls>
                  <source src="/videoplayback.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Card.Footer className="p-0">
                  <div>
                    <div className="d-flex align-items-center justify-content-between p-3 ">
                      <div className="d-flex">
                        <p className="m-0 h5"><span className="m-0 p-0">🤣</span><span>😆</span><span>😇</span></p>
                        <span>299</span>
                      </div>
                      <div>
                        <span className="h6">5 comment</span>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-around p-3 ">
                      <div className="displayFlex w-25">
                        <AiOutlineLike />{" "}
                        Like
                      </div>
                      <div className="displayFlex w-25">
                        <FaRegComment />{" "}
                        comment
                      </div>
                      <div className="displayFlex w-25">
                        <FaWhatsapp />{" "}
                        send
                      </div>
                      <div className="displayFlex w-25">
                        <TbShare3 />{" "}
                        share
                      </div>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </section>
            <section className="postContainer mt-4">
              <Card>
                <Card.Header>
                  <div className="PostProfileContainer">
                    <div>
                      <img
                        src="/5MinLogo.jpg"
                        width={40}
                        alt="img"
                        className="PostingUserImg border"
                      />
                      <div>
                        <div>
                          <b>
                            5-Minute Crafts
                            <LuDot />
                            <a href="#">Follow</a>
                          </b>
                        </div>
                        <div>
                          <span className="h6">57m</span>
                          <LuDot />
                          <BsGlobeAmericas />
                        </div>
                      </div>
                    </div>

                    <div className="postCloseButton">
                      <HiOutlineDotsHorizontal className="me-2" />
                      <IoMdClose />
                    </div>
                  </div>
                </Card.Header>
                <video autoplay loop controls>
                  <source src="/videoplayback.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Card.Footer className="p-0">
                  <div>
                    <div className="d-flex align-items-center justify-content-between p-3 ">
                      <div className="d-flex">
                        <p className="m-0 h5"><span className="m-0 p-0">🤣</span><span>😆</span><span>😇</span></p>
                        <span>299</span>
                      </div>
                      <div>
                        <span className="h6">5 comment</span>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-around p-3 ">
                      <div className="displayFlex w-25">
                        <AiOutlineLike />{" "}
                        Like
                      </div>
                      <div className="displayFlex w-25">
                        <FaRegComment />{" "}
                        comment
                      </div>
                      <div className="displayFlex w-25">
                        <FaWhatsapp />{" "}
                        send
                      </div>
                      <div className="displayFlex w-25">
                        <TbShare3 />{" "}
                        share
                      </div>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </section>
            <section className="postContainer mt-4">
              <Card>
                <Card.Header>
                  <div className="PostProfileContainer">
                    <div>
                      <img
                        src="/5MinLogo.jpg"
                        width={40}
                        alt="img"
                        className="PostingUserImg border"
                      />
                      <div>
                        <div>
                          <b>
                            5-Minute Crafts
                            <LuDot />
                            <a href="#">Follow</a>
                          </b>
                        </div>
                        <div>
                          <span className="h6">57m</span>
                          <LuDot />
                          <BsGlobeAmericas />
                        </div>
                      </div>
                    </div>

                    <div className="postCloseButton">
                      <HiOutlineDotsHorizontal className="me-2" />
                      <IoMdClose />
                    </div>
                  </div>
                </Card.Header>
                <video autoplay loop controls>
                  <source src="/videoplayback.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Card.Footer className="p-0">
                  <div>
                    <div className="d-flex align-items-center justify-content-between p-3 ">
                      <div className="d-flex">
                        <p className="m-0 h5"><span className="m-0 p-0">🤣</span><span>😆</span><span>😇</span></p>
                        <span>299</span>
                      </div>
                      <div>
                        <span className="h6">5 comment</span>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-around p-3 ">
                      <div className="displayFlex w-25">
                        <AiOutlineLike />{" "}
                        Like
                      </div>
                      <div className="displayFlex w-25">
                        <FaRegComment />{" "}
                        comment
                      </div>
                      <div className="displayFlex w-25">
                        <FaWhatsapp />{" "}
                        send
                      </div>
                      <div className="displayFlex w-25">
                        <TbShare3 />{" "}
                        share
                      </div>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </section>
           
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
