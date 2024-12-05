import React from "react";
import Slider from "react-slick";

const CenterHomeComp = () => {
    //settings for slick slider
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
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
    );
}

export default CenterHomeComp;