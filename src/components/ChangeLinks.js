import React, { useState } from 'react'

const ChangeLinks = (props) => {
    const isLoggedIn = props.isLoggedIn
    const links = props.links
    const setLinks = props.setLinks
    const [username, setUsername] = useState(links.facebook)
    const [password, setPassword] = useState(links.linkedIn)

    function handleSubmit(e) {
        e.preventDefault()
        let links = {
            facebook: username,
            linkedIn: password
        }
        setLinks(links)
    }

    return (
        <div>
            {(isLoggedIn) ?
                <div className='outerDiv'>
                    <div className='innderDiv'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <h1>Link Change Page</h1>
                            <label htmlFor='facebook'>Facebook Link</label><br />
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type={'email'} ></input><br />
                            <label htmlFor='linkedIn'>LinkedIn Link</label><br />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={'text'}></input> <br />
                            <button  > Update Links</button>
                        </form>
                    </div>
                </div>
                : <h1>You need to Log In first</h1>
            }
        </div >
    )
}

export default ChangeLinks
