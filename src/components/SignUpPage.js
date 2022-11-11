import React, { useState } from 'react'



const SignUpPage = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const setisLoggedIn = props.setisLoggedIn

    const userData = props.data


    function handleSubmit(e) {
        e.preventDefault()
        let flag = false;
        userData.forEach((item) => {
            if (item.name === username && item.password === password) {
                flag = true
                setisLoggedIn(true)
                return;
            }
        })
        if (!flag) {
            alert("UserName or Password is wrong")
        }

    }

    return (
        <div className='outerDiv'>

            <div className='innderDiv'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h1>Sign Up Page</h1>
                    <label htmlFor='name'>UserName</label><br />
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type={'email'} placeholder="Enter Your Username/Email Address"></input><br />
                    <label htmlFor='password'>Password</label><br />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder="Enter Your Password"></input><br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage
