import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./img/solandLogo.png";
import "../screen/Team.css"
import bar from "./img/bar.png"
import t1 from "./img/team1.jpg"
import t2 from "./img/team2.jpg"
import t3 from "./img/team3.jpg"

const Team = () => {
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

            {/* Body Content  */}

            <div className="team-body">
                <div className="team-head">
                    <br /><br /><br />
                    <h1 className="team-heading">Our Team</h1>
                </div>

                <section className="teamcards-section">
                    <div className="card1" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card1-img">
                            <img src={t1} alt="Founder & Developer" />
                        </div>
                        <div className="card1-content">
                            <h1>Jan Peter</h1>
                            <h2>Founder & Developer</h2>
                            <h3>Finland</h3>
                            <p>Jan Peter found his passion from tech and finance
                                industry at a very young age. Currently on a
                                mission to build VR DeFi,this mean Virtual Reality
                                Decentralized Finance, he is the Vice
                                President of Soland City metaverse.</p>
                        </div>
                    </div>

                    <div className="card1" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card1-img">
                            <img src={t2} alt="Founder & Developer" />
                        </div>
                        <div className="card1-content">
                            <h1>Anders Johnsson</h1>
                            <h2>Blockchain Advisor</h2>
                            <h3>Sweden</h3>
                            <p>Anders has business experience and is a very experienced advisor in blockchain, NFT, DeFi and
                                Metaverse.
                                Anders is by experience and knowledge a veteran in Crypto.</p>
                        </div>
                    </div>

                    <div className="card1" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card1-img">
                            <img src={t3} alt="Founder & Developer" />
                        </div>
                        <div className="card1-content">
                            <h1>Omonije Isaac</h1>
                            <h2>Developer</h2>
                            <h3>Nigeria</h3>
                            <p>Isaac is a full-stack developer/Blockchain Developer and is very experienced at writing smart
                                contracts for NFTs and also creating great website designs with React.
                                Isaac is by experience and knowledge an expert at frontend and Blockchain development.</p>
                        </div>

                    </div>

                </section>
                <br /><br /><br />

            </div>
        </>
    )
}

export default Team;
