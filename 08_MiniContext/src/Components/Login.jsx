import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [UserName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ UserName, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='UserName' />
            {"  "}
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit} type='Submit'>Submit</button>
        </div>
    )
}

export default Login;


