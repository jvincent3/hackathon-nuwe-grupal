import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';
import Home from "pages/home"
import User from "pages/user"
import Login from "pages/login"
import Register from "pages/register"
import Layout from 'layout'
import PageNotFound from 'components/Error/PageNotFound';
import Landing from 'pages/landing'
import AboutPage from 'pages/about';


function App() {

  return (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/user/:username" component={User}/>
                <Route path="/login" component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/home" component={Home} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound}/>
            </Switch>
        </Layout>
    </Router>
  );
}

export default App;