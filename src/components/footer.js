import React from 'react'
import "./footer.css"

const Footer = (props) => {
    const { links } = props

    return (

        <div className="footer" >
            <div className="sucess" >
                <h1>Success</h1>
            </div>
            <div className="home" >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Category</li>
                    <li>Content</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="community" >
                <ul>
                    <li>Go premium</li>
                    <li>Refer a friend</li>
                    <li>Gift cards</li>
                </ul>
            </div>
            <div className="connected" >
                <ul>
                    <li> <a href={links.facebook}>Facebook</a> </li>
                    <li> <a href={links.linkedIn}>LinkedIn</a></li>
                </ul>

            </div>

        </div>


    )
}

export default Footer
