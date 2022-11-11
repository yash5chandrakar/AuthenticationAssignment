import React from 'react'
import { Link } from 'react-router-dom'

const DisplayPage = (props) => {
    return (
        <div className='adminDiv'>
            <h1>Admin Panel</h1>
            <div className='funcs'>
                <h2>Functions :-</h2>
                <div>
                    <ul>
                        <li><Link to={"/admin/changeLinks"}>1. Change Facebook & LinkedIn Links</Link></li>
                        <li><Link to={"/admin/changeAdmins"}>2. Add Admins</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default DisplayPage
