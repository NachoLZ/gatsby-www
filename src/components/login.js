import React, { useState }from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'

const defaultValues = {
    username: '',
    password: ''
}

const Login = () => {

    const [user, setUser] = useState(defaultValues)

    const handleUpdate = event => {
        setUser(prevuser => ({
            ...prevuser,
            [event.target.name] : event.target.value,
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleLogin(user)
        navigate(`/app/profile`)
    }

    
    if( isLoggedIn() ){
        navigate(`/app/profile`)
    }
    
    return ( 
        <>
            <h1> Log in </h1>
            <form
                method="post"
                onSubmit={handleSubmit}
            >
                <label>
                    Username
                    <input type="text" name="username" onChange={handleUpdate} />
                </label>
                <label>
                    Password
                    <input
                        type="password" 
                        name="password" 
                        onChange={handleUpdate} 
                    />
                </label>

                <input type="submit" value="Log In" />
                
            </form>
        </>
    );
}
 
export default Login;
