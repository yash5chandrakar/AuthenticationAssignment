import React from 'react'
import DisplayPage from './DisplayPage'
import SignUpPage from './SignUpPage'
import "./adminPage.css"

const AdminPage = (props) => {
    const isLoggedIn = props.isLoggedIn


    return (
        <div>
            <h1 align={'center'}>Admin Page</h1>
            {(isLoggedIn) ? <DisplayPage /> : <SignUpPage data={props.data} setisLoggedIn={props.setisLoggedIn} />}
        </div>
    )
}

export default AdminPage
