import React, {Component} from "react";
import axios from "axios";
import to from "await-to-js"
import { Link } from "react-router-dom"

export default class Post extends Component{
    state ={
        post:{
            "_id": "",
            "title": "",
            "author": "",
            "imageURL":"",
            "content": "",
            "createdAt": ""
        }
    }
    componentDidMount =async()=>{
        const  {_id}  = this.props.match.params
        let [ error, result ] = await to (axios.get(`/posts/${_id}`))
        console.log(result.data)
        let post = result.data
        if (error){
            console.log(error)
        }
        return this.setState({post})
    }

    deletePost = async()=>{
        const  {_id}  = this.props.match.params
        let [ error ] = await to (axios.delete(`/posts/${_id}`))
        if(error){
            console.log('deleteItem has error',error)
        }
        return this.props.history.push("/posts")
    }
    changePage =()=>{
        this.props.history.push("/posts")
    }

    render(){
        const { post } = this.state
        const { _id, title, author, imageURL, content } = post
        return(
            <div className='App'>
                <div key = {_id} >
                    <h3>{title}</h3>
                    <h5 className='heading'>{author}</h5>
                    <img src= {imageURL} alt={title} />
                    <h5>{content}</h5>
                    <div className='buttons-container'>
                        <button className='btn btn-danger post-buttons' onClick={this.deletePost}>Delete Post</button>
                        <button className='btn btn-dark post-buttons'>
                            <Link to = {{
                                pathname: `/posts/${_id}/edit`
                            }}
                            className = 'edit-button'>Edit Post
                            </Link>
                        </button>
                        <button className='btn btn-info post-buttons' onClick={this.changePage}>Back to Home</button>
                    </div>
                </div>
            </div>
        )
    }
}
