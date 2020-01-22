import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Add from "./components/Add"
import Post from "./components/Post"
import Edit from "./components/Edit"
import './index.css';

class App extends Component {
    render(){
        return(
            <div>
                <Router>
                  <Switch>
                    <Route exact path="/posts" component ={Home} />
                    <Route exact path="/posts/add" component ={Add} />
                    <Route exact path='/posts/:_id' component ={Post}/>
                    <Route exact path='/posts/:_id/edit' component ={Edit}/>
                  </Switch>
                </Router>
            </div>
         )
    }
}

export default App;
