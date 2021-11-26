import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profile from '../components/profile'
import Login from '../components/login'
import PrivateRouter from '../components/privateRouter'

const App = () => {
    return ( 
        <Layout>
            <Router>
                <PrivateRouter path="/app/profile" component={Profile} />
                <Login path="/app/login" />
            </Router>
        </Layout>
    );
}
 
export default App;
