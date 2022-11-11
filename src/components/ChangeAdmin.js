import React, { useState } from 'react'

const ChangeAdmin = (props) => {
    const data = props.data
    const setuserData = props.setuserData
    const isLoggedIn = props.isLoggedIn
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let user = {
            name: username,
            password: password
        }
        setuserData([...data, user])
    }
    let id = 1

    return (
        <div>
            {(isLoggedIn) ?
                <div>
                    <div className='outerDiv'>
                        <div className='innderDiv'>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <h1>Add Admin Page</h1>
                                <label htmlFor='name'>UserName</label><br />
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type={'email'} placeholder="Enter Your Username/Email Address"></input><br />
                                <label htmlFor='password'>Password</label><br />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder="Enter Your Password"></input><br />
                                <button>Add User</button>
                            </form>
                        </div>
                    </div>
                    <div className='userData'>
                        <h1>All Users</h1>
                        <div>
                            {data.map((item) => {
                                return (
                                    <div key={id}>
                                        <h2>User {id++}</h2>
                                        <p>{item.name}</p>
                                        <p>{item.password}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                : <h1>You need to Log In first</h1>}
        </div>
    )
}

export default ChangeAdmin
