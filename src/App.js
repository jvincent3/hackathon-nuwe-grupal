import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';
//importing MOCK_DATA.json
import MOCK_DATA from "./MOCK_DATA.json"
import Home from "pages/home"
import User from "pages/user"
import Login from "pages/login"
import Register from "pages/register"
import Layout from 'layout'
import PageNotFound from 'components/Error/PageNotFound';


function App() {


    function countNuweAsLastName(data) {
        //filters every array which contains Nuwe as last_name
        const contentFound = data.filter((value, index) => {
            return value.last_name.includes("Nuwe");
        })
        return contentFound;
    }

    function getAllObjectsWithoutPet(data) {

        const allFirstDigitsOfIp = []
        //filters every array which not contains pet attribute
        const contentFound = data.filter(value => {
            return !value.pet;
        })
        contentFound.forEach(value => {
            allFirstDigitsOfIp.push(parseInt(value.ip.split(".")[0]))
        })

        return Math.max(...allFirstDigitsOfIp);
    }

    function getFirstId(data) {

        const firstValueId =  countNuweAsLastName(data)[0].id;
        //Using regular expressions which removes all alphabetical letters
        const removeAlphabetChars = firstValueId.replace(/[^\d.-/]/g, "");
        
        return removeAlphabetChars;
    }
    
    useEffect(() => {
        console.log(
            countNuweAsLastName(MOCK_DATA).length +"-"+ getFirstId(MOCK_DATA) +"-"+getAllObjectsWithoutPet(MOCK_DATA)
        )
    },[])

  return (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user/:username" component={User}/>
                <Route path="/login" component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route component={PageNotFound}/>
            </Switch>
        </Layout>
    </Router>
  );
}

export default App;