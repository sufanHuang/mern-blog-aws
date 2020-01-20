import React, { Component } from 'react'
import axios from 'axios'
import to from "await-to-js"

class Add extends Component {
    state = {
        posts:[],
        newPost:{
            _id:"",
            title:"",
            author:"",
            imageURL:"",
            content:"",
            createdAt:""
        }
    }



    onTitleChange = event =>{this.setState({newPost:{...this.state.newPost, "title": event.target.value}})}
    onAuthorChange = event =>{this.setState({newPost:{...this.state.newPost, "author": event.target.value}})}
    onContentChange = event =>{this.setState({newPost:{...this.state.newPost, "content": event.target.value}})}
    onImageChange = event =>{this.setState({newPost:{...this.state.newPost, "imageURL": event.target.value}})}


    addItem = async(event)=> {
        event.preventDefault()
        let { posts, newPost } =this.state
        const dataParameters = {
            "title": newPost.title,
            "author": newPost.author,
            "imageURL": newPost.imageURL,
            "content": newPost.content,
            "createdAt": newPost.createdAt
        }

        let [ error, result ]= await to(axios.post("/posts",dataParameters))
        console.log(result.data)
        if(error){
            console.log('addItem has error')
        }

        return this.setState({
            posts: [...posts, result.data],
            newPost:  {"_id":"", "title":"", "author":"", "imageURL":"","content":"", "createdAt":""}
        })
    }


    render(){
        const { newPost } = this.state
        return (
            <div className='App'>
                <div className = "container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title heading">
                                ADD POST
                            </h3>
                        </div>
                        <form >
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" className="form-control" name="title" value={newPost.title} onChange={this.onTitleChange}
                                       placeholder="Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content:</label>
                                <textarea className="form-control" name="content" value={newPost.content} onChange={this.onContentChange}
                                          placeholder="Content" cols="80" rows="3"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="imageURL">ImageURL:</label>
                                <input type="url" className="form-control" name="imageURL" value={newPost.imageURL} onChange={this.onImageChange}
                                       placeholder="ImageURL"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author:</label>
                                <input type="text" className="form-control" name="author" value={newPost.author} onChange={this.onAuthorChange}
                                       placeholder="Author"/>
                            </div>
                            <button type="submit" className="btn btn-secondary post-buttons" onClick={this.addItem}>Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        )
    }

}

export default Add;
