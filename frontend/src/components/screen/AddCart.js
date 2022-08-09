import React, { useState } from 'react';
import logo from "./img/solandLogo.png";
import { NavLink } from 'react-router-dom';
import bar from "./img/bar.png"

const AddCart = () => {
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
                        <li><NavLink to="/">LogOut</NavLink></li>



                        <li id="bar" onClick={Toggel}> <img src={bar} alt="" />


                            <ul style={toggleStyles} className="mobilemenu">
                                <li><NavLink to="/">LogOut</NavLink></li>




                            </ul>
                        </li>



                    </ul>
                </div>
            </div>
        </>
    )
}

export default AddCart