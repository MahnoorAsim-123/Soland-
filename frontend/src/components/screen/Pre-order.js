import React, { useState } from 'react';
import logo from "./img/solandLogo.png";
import { NavLink } from 'react-router-dom';
import bar from "./img/bar.png";
import ban from "./img/ban.PNG";
import "../screen/Preorder.css"

const PreOrder = () => {
    const styles = {
        visibility: "hidden",

    }
    const styles2 = {
        visibility: "visible",

    }
    const [toggleStyles, settoggleStyles] = useState(styles)
    const [toggle, settoggle] = useState(true)


    const Toggel = () => {
        settoggle(!toggle)

        toggle == true ? settoggleStyles(styles2) : settoggleStyles(styles)
    }
    return (
        <>
            <div className="navsection">
                <div className="logos">
                    <ul>

                        <li> <img className="solandlogo" src={logo} width="60px" alt="" /></li>

                    </ul>
                </div>
                <div className="icons">

                    <ul>
                        <li><NavLink to="/preorder">Pre-order</NavLink></li>
                        <li><NavLink to="/team">Team</NavLink></li>
                        <li><NavLink to="/aboutus">About us</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Register</NavLink></li>

                        <li id="dropshow" >

                            <div className="dropdown">
                                <a className="btn   mydrwop dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                    English
                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                    <a className="dropdown-item" href="/spanish">Spanish </a>

                                </div>
                            </div>
                        </li>

                        <li id="bar" onClick={Toggel}> <img src={bar} alt="" />


                            <ul style={toggleStyles} className="mobilemenu">
                                <li><NavLink to="/preorder">Pre-order</NavLink></li>
                                <li><NavLink to="/team">Team</NavLink></li>
                                <li><NavLink to="/aboutus">About us</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/signup">Register</NavLink></li>
                                <li id="dropshow" >

                                    <div className="dropdown">
                                        <a className="btn   mydrwop dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                            English
                                        </a>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item" href="/spanish">Spanish</a>


                                        </div>
                                    </div>
                                </li>



                            </ul>
                        </li>



                    </ul>
                </div>
            </div>


            {/* content */}
            <div className='parentCont'>



                <div className='mainCont'>
                    <br />

                    <div className='cent'>
                        <br /><br /><br />
                        <h1>Pre-order Your Virtual Space Now!</h1>
                    </div>
                    <br /><br />
                    <div className='cent'>
                        <div className='inner-Cent'>

                            <h5>
                                Soland City is a metaverse aka Virtual Reality thats designed as a city in Span called
                                Marbella and is building a global money making hun.Join us!
                            </h5>

                        </div>


                        <div className='inner-Cent' >


                            <h5>
                                We can, make your current office into a virtual reality office or let us design
                                one for you.
                            </h5>

                        </div>


                        <div className='inner-Cent'>


                            <h2>
                                Pre-order today enjoy <span className='discount'>-50% discount</span>!
                                <br />
                                <span className='offer'>  (offer valid until we are live)</span>
                            </h2>

                        </div>
                        <div className='inner-Cent'>


                            <h4>No VR Glasses Needed</h4>

                        </div>
                    </div>






                    <div className='box-Cont'>


                        <div className='box' data-aos="fade-down" data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <div className='text-btn'>
                                <h5>Virtual Reality office</h5>
                                <div className='box-inner'>
                                    <h4>Save Time
                                        <br />
                                        Save Money
                                        <br />
                                        Meet with anyone
                                        <br />
                                        Sell more
                                    </h4>
                                </div>
                            </div>
                            <div className='box-btn'>
                                <button>Buy Here</button>
                            </div>



                        </div>



                        <div className='box' data-aos="fade-down" data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <div className='text-btn'>
                                <h5>Digital Banner AD (FREE)</h5>
                                <div className='box-inner'>
                                    <h4>Your Logo
                                        <br />
                                        Your Slogan
                                        <br />

                                    </h4>
                                </div>
                            </div>
                            <div className='box-btn'>
                                <button>I want One!</button>
                            </div>


                        </div>

                    </div>






                    <div className='btn-Cont'>


                        <button className='butn'><a href="../pdf/Soland Web Presentation.pdf" style={{ color: "black" }}>Read More</a></button>
                        <button className='butn'><a href="#" style={{ color: "black" }}>Meet Us</a></button>
                        <button className='butn'><a href="https://forms.gle/ktnZoeHYaJhibjTr8" style={{ color: "black" }}>For investers</a></button>


                    </div>




                    <div className='img-Cont'>

                        <img src={ban} alt="" />

                        <h4>Estimation of business having a Virtual Reality Office by 2030,Read Here.</h4>

                    </div>



                    <br /><br /><br /><br /><br />






                </div>
            </div>
        </>
    )
}

export default PreOrder