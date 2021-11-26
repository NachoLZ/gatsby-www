import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'
import "./scss/nav-bar.scss";

export default function NavBar() {

    let greetingMessage = ""

    if (isLoggedIn()) {
        greetingMessage = `Hello ${getUser().name}`
    }else {
        greetingMessage = "You are not logged in"
    }

    const navLogOut = (event) => {
        event.preventDefault()
        logout(() => navigate(`/app/login`))
    }

    return (
        <div
            className="navbar"      
        >
            <span> {greetingMessage} </span>

            <nav>
                <Link to="/"> Home </Link>
                {` `}
                <Link to="/"> Profile </Link>
                {` `}
                { isLoggedIn() ? (
                    <a
                        href="/"
                        onClick={navLogOut}
                    >
                    Logout
                    </a>
                ) : null }

            </nav>
            
        </div>
    )

}