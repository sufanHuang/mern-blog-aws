import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import to from "await-to-js"

class App extends Component {
    state = {
        posts:[],
    }

    componentDidMount(){
        this.listAll()
    }



    listAll = async()=>{
        let [ error, result ] = await to (axios.get("/posts"))
        console.log(result)
        if(error){
            console.log('ListAll has error')
        }
        return this.setState({posts:result.data})
    }




    render(){
        const { posts } = this.state
        return (
            <div className='App'>
                <div className = "container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title heading">
                                MERN BLOG ADMIN APP
                            </h2>
                        </div>
                    </div>

                    <div className= "list-group">
                        <ul className='post-items'>
                            {
                                posts.map(currentPost =>{
                                    return (
                                        <div key = {currentPost._id}>
                                            <h5 className='post-item'>
                                                <i className="fa fa-folder-open" style={{color: "green"}}></i>
                                                <Link to = {{
                                                    pathname: `/posts/${currentPost._id}`
                                                }} className = 'links'>  --- { currentPost.title}</Link>
                                            </h5>
                                        </div>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
        )
    }

}

export default App;
