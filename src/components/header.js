import React from "react";
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                    <h1><Link to='/'>My Página</Link></h1>
                <ul>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header