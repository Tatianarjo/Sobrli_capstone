import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
             <li className="navbar__item active">
                <Link className="navbar__link" to="/">Sobrli</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/motivations">Motivation</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/moodTrackers">Mood Tracker</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/supports">Support</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/calendars">Calendar</Link>
            </li> 
        </ul>
    )
}