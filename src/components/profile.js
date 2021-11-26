import React from 'react';
import { getUser } from '../services/auth';

const Profile = () => {

    return (
        <>
            <h1> Your Profile </h1>
            <ul>
                <li> Username: { getUser().username } </li>
                <li> Name: { getUser().name } </li>
                <li> E-mail: { getUser().email } </li>
            </ul>    
        </>
    )
}

export default Profile