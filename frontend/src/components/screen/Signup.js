import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../screen/SignUp.css"
import { toast } from 'react-toastify';
import Toast from "../screen/Toast";
import logo from "./img/solandLogo.png";
import { NavLink } from 'react-router-dom';
import bar from "./img/bar.png"



const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setpassword] = useState("");

    // const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

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


    const navigate = useNavigate();

    const userObj = {
        username,
        email,
        contact,
        password,
    };


    // Form Submission Handler....
    const submitHandler = (e) => {

        e.preventDefault();

        setLoading(true);

        if (!username || !email || !contact || !password) {

            toast.error("Required Field's are missing", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

            setLoading(false);

        }

        else {

            console.log("Welcome to Soland", { userObj })

            axios.post("http://localhost:5000/api/signup", userObj)

                .then((res) => {
                    if (res.data.message === "Email address is already exist.") {

                        console.log("Email address already exists.");
                        toast.error('Email Address already exists', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        console.log("Done.!!");

                        toast.success('Successfully Registered', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                        });

                        setUsername("")
                        setEmail("")
                        setContact("")
                        setpassword("")

                        setTimeout(() => navigate("/login"), 2000)
                    }


                    setLoading(false);

                    // console.log(res);

                })

                .catch((err) => {
                    console.log("err");
                });
        };
    };

    // const toggleHandler = () => {
    //     setIsChecked(!isChecked)
    // };

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

            {/*Form  */}

            <div className="signup-container">
                <br /><br /><br /><br />
                <div className="signup-heading">

                    <h1 data-aos="fade-up"
                        data-aos-duration="3000">SignUp</h1>
                </div>

                <div className="signup-body-container" data-aos="fade-up"
                    data-aos-duration="3000">

                    <div className="signup-body">



                        <form className="signup-form" onSubmit={submitHandler}>

                            <input

                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <br />
                            <input

                                type="text"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <input

                                type="number"
                                placeholder="Contact Number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                            <br />
                            <input

                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <br />

                            {
                                loading ? <div className="spinner-border" role="status" style={{
                                    margin: '0 auto',
                                    color: '#a812ad'
                                }}>
                                    <span

                                        className="sr-only">Loading...</span>
                                </div>


                                    : <button className="signupBtn">Signup</button>
                            }



                            <br />
                            {/* <p className="redirectPage">Already a Member?&nbsp;&nbsp;
                        <button className="Log" onClick={() => navigate("/login")}>Login here</button></p> */}
                        </form>
                    </div>
                </div>

            </div>


            <Toast />

        </>

    )
};

export default Signup;