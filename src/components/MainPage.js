import React from 'react'
import Footer from './footer'
import { NavbarOne } from './navbarOne'
import Subcontent from './subcontent'
import Welcome from './welcome'

const MainPage = (props) => {
    return (
        <div>
            <NavbarOne links={props.links} />
            <Welcome />
            <Subcontent mentors={props.mentors} />
            <Footer links={props.links} />
        </div>
    )
}

export default MainPage
