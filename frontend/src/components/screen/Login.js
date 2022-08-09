import React, { useState } from 'react';
import axios from "axios";
import "../screen/Login.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Toast from "../screen/Toast";
import logo from "./img/solandLogo.png";
import { NavLink } from 'react-router-dom';
import bar from "./img/bar.png"


const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

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

  const loginuphandle = (e) => {


    e.preventDefault()

    setLoading(true);

    const userobj = {
      email,
      password
    }


    axios.post("http://localhost:5000/api/login", userobj)
      .then((res) => {
        if (res.data.message == "user successfully login") {
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log("Login succesfully")
          // alert("Login succesfully")

          toast.success('Loggedin Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setLoading(false)
          setTimeout(() => navigate("/addcart"), 2000)
        }
        else {

          // alert("Invalid Credentials")
          toast.error('Invalid Credentials', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          console.log("Invalid Credentials")
          setLoading(false)


        }


        // console.log(res)

        // setemail("")
        // setpassword("")
      })
      .catch((err) => {
        console.log("Server is disconnected")
        toast.error('Server is disconnected', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setLoading(false)
      })
  };


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

      <div className="login-container" >
        <br /><br /><br /><br />
        <div className="login-heading" data-aos="fade-up"
          data-aos-duration="3000">
          <h1>Login</h1>
        </div>

        <div className='login-body-container' data-aos="fade-up"
          data-aos-duration="3000">
          <div className='login-body'>
            <form onSubmit={loginuphandle} className="login-form">

              <input

                type="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => { setemail(e.target.value) }}
              />

              <br />

              <input

                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => { setpassword(e.target.value) }}
              />

              <br />


              {/* <button type="submit" className="loginBtn">Login</button> */}
              {
                loading ? <div className="spinner-border" role="status" style={{
                  margin: '0 auto',
                  color: '#a812ad'
                }}>
                  <span

                    className="sr-only">Loading...</span>
                </div>


                  : <button className="loginBtn" >Login</button>
              }
            </form>
          </div>
        </div>
      </div>

      <Toast />
    </>
  );
}

export default Login;
