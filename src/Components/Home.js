import React, { Component } from 'react'
import './Home.css';
import User from '../Images/user1.png';
import Hotel1 from '../Images/hotel1.jpg';
import Hotel2 from '../Images/hotel2.jpg';
import Verify from '../Images/verify.png';
import Bookmark from '../Images/bookmark.png';
import Bookmarkb from '../Images/bookmarkb.png';
import Star from '../Images/star.png';
import Starg from '../Images/starg.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav className="nav-menu">
                    <div className="ham-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="user">
                        <img src={User} />
                        <span></span>
                    </div>
                </nav>
                <div className="top-sec">
                    <div className="box">
                        <div className="bt-top">
                            <div style={{ position: "relative" }}>
                                <span className="dot"></span>
                                <h6 className="bt-head-first bt-head">ACCOMMODATION</h6>
                            </div>
                            <div>
                                <h6 className="bt-head">FLIGHTS</h6>
                            </div>
                            <div>
                                <h6 className="bt-head">TRAINS</h6>
                            </div>
                        </div>
                        <div className="sec-two-below">
                            <h3>Hi Wildan,<br /> Where do you want to stay?</h3>
                            <input placeholder="Your Destination" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="near">
                        <div>
                            <h4>Near You</h4>
                            <p>12 Hotel Found</p>
                        </div>
                        <p>MORE</p>
                    </div>
                    <div className="searched-hotel">
                        <img src={Hotel1} />
                        <div style={{paddingLeft:"16px",width:"100%"}}>
                            <div className="hotel-name">
                                <h4>The Rose Hotel <img src={Verify}/></h4>
                                <img src={Bookmark}/>
                            </div>
                            <img src={Star} className="star"/>
                            <img src={Star} className="star"/>
                            <img src={Star} className="star"/>
                            <img src={Star} className="star"/>
                            <img src={Starg} className="star"/>
                            <div className="price">
                                <p>Start from</p>
                                <h4>$60<span>/Night</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-loc-detail">
                        <div><span className="hotel-dot"></span><p>10m From your location</p></div>
                        <div><span className="hotel-dot"></span><p>2 Room</p></div>
                        <div><span className="hotel-dot"></span><p>10 Facilities</p></div>
                    </div>
                    <div className="searched-hotel">
                        <img src={Hotel2} />
                        <div style={{paddingLeft:"16px",width:"100%"}}>
                            <div className="hotel-name">
                                <h4>Tretes Raya Hotel</h4>
                                <img src={Bookmarkb}/>
                            </div>
                            <img src={Star} className="star"/>
                            <img src={Star} className="star"/>
                            <img src={Star} className="star"/>
                            <img src={Starg} className="star"/>
                            <img src={Starg} className="star"/>
                            <div className="price">
                                <p>Start from</p>
                                <h4>$145<span>/Night</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-loc-detail">
                        <div><span className="hotel-dot"></span><p>2KM From your location</p></div>
                        <div><span className="hotel-dot"></span><p>2 Room</p></div>
                        <div><span className="hotel-dot"></span><p>13 Facilities</p></div>
                    </div>
                </div>
            </div>
        )
    }
}
