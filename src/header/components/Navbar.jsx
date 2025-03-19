import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navBarWrapper">

        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                
                <li>
                    <Link to={'/'}>All Pages</Link>
                </li>
                <li>
                    <Link to={'/'}>About Us</Link>
                </li>
                <li>
                    <Link to={'/'}>Property</Link>
                </li>
                <li>
                    <Link to={'/'}>News</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar