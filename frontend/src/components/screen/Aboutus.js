import React, { useState } from 'react';
import logo from "./img/solandLogo.png";
import { NavLink } from 'react-router-dom';
import bar from "./img/bar.png";
import "../screen/About.css"
import globe from '../screen/img/globe.jpg'

const Aboutus = () => {
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

            {/* <!-- Content --> */}
            <div className="body">
                <div className="aboutus-box">
                    <div className="aboutus" data-aos="fade-left" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <br />
                        <h3>About us</h3>
                    </div>
                    <div className="about-text" data-aos="fade-left" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <p>
                            4D Markets has a long history in the field
                            of management, finance, business and technologies.
                            4D Markets combines these 4 elements into a Metaverse.
                        </p>
                        <p>
                            We are one a mission to make your business more
                            profitable and effective.
                        </p>
                    </div>
                    <div className="team" data-aos="fade-left" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1>(&nbsp;Team&nbsp;)</h1>
                    </div>
                    <br />


                    <div className="cb"
                        style={{
                            // border:'1px solid red',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap-reverse'
                        }}
                    >
                        <div className="cb1"
                            style={{
                                // border:'1px solid green',
                                width: '500px'
                            }}
                        >
                            <div style={{
                                marginLeft: '20px',
                                fontSize: '30px'
                            }}>
                                <h4 style={{
                                    fontSize: '25px',
                                    fontFamily: 'Montserrat, sans-serif',
                                }}>
                                    Contact us
                                </h4>
                            </div>

                            <div className='contact-box' >
                                <div className="contact-form" data-aos="fade-left" data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">

                                    <form data-aos="fade-left" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000">
                                        <input type="text" placeholder='Name' />
                                        <br />
                                        <input type="email" placeholder='Email' />
                                        <br />
                                        <textarea name="" id="" cols="60" rows="10" placeholder='Message..!!'></textarea>
                                        <br />
                                        <button className='contact-btn' style={
                                            {
                                                border: 'none',
                                                width: '415px',
                                                padding: '10px 0px',
                                                backgroundColor: '#EB11F4',
                                                fontFamily: 'Montserrat, sans-serif',
                                                borderRadius: '15px'


                                            }}
                                        >
                                            <a href="Soland Web Presentation.pdf" style={
                                                {
                                                    color: 'white',
                                                    fontSize: '17px',
                                                    fontWeight: '500',
                                                    textDecoration: 'none',
                                                }
                                            }
                                            >Send Message
                                            </a>
                                        </button>
                                    </form>
                                    <br />
                                    <div className="icons">
                                        <p>
                                            <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <br />
                                            {/* <!-- <i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; --> */}
                                            <br />
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cb2"
                            data-aos="fade-left" data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                            style={{
                                // border:'1px solid green',
                                width: '500px',
                                height: '500px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderRadius: '40px'

                            }}
                        >
                            <img src={globe} alt="" width='100%'
                                style={{

                                    borderRadius: '40px'

                                }}



                            />
                        </div>
                    </div>
                </div>
                <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </>
    )
}

export default Aboutus