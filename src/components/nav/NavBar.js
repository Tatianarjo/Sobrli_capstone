import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
             {/* <li className="navbar__item">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>  */}
             <li className="navbar__item active">
                <Link className="navbar__link" to="/">Sobrli</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/motivations">Motivation</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/candleMakers">Make Your Candle</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/supports">Support</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/calendars">Calendar</Link>
            </li> 
            <li className="navbar__item">
                <Link className="navbar__link" to="/login">LogOut</Link>
            </li> 
        </ul>
    )
}



///*

// const Logout = () => {
//     sessionStorage.removeItem("trendago_user")
//     history.push("/login")
// }

//in Navbar

//  <li className="aNavLink">
//  <Link className="" onClick={Logout}>Logout</Link>
// </li>


