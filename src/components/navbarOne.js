import React from 'react'
import { Link } from 'react-router-dom'
import "./navbarOne.css"

export const NavbarOne = (props) => {
    const links = props.links

    return (
        <div className='navigation'>
            <h1 className='siteName'>Success</h1>
            <div className='fb'>
                <a href={links.facebook}>Facebook</a>
            </div>
            <div className='linkedIn'>
                <a href={links.linkedIn}>LinkedIn</a>
            </div>
            <div>
                <Link to="/admin"><h3>Sign In</h3></Link>
            </div>
        </div>
    )
}
