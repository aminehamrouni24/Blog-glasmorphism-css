import React from 'react'
import{Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>The mingo Blog</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/createblog">Create blog</Link>
            </div>
        </div>
    )
}
