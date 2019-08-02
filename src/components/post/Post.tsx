import React, { Component } from "react";
import axios from "axios";

import "./Post.scss"

type PostState = {
    title: String
    body: String
}

class Post extends Component<{}, PostState> {
    componentDidMount() {
        axios.get("http://localhost:8080/api/v0.1/post/default", { headers: { "Access-Control-Allow-Origin": "*" } })
            .then(apiResponse => {
                this.setState({
                    title: apiResponse.data.title,
                    body: apiResponse.data.body
                })
            })
    };

    render() {
        const post = this.state != null ? (
            <div className="post-text">
                <h1 className="post-header">{ this.state.title }</h1>
                <p className="post-body">{ this.state.body }</p>
            </div>
        ) : (
            <div className="post-text">
                <p className="post-body">Loading Post...</p>
            </div>
        )

        return (
            <div className="post">{ post }</div>
        )
    }
}

export default Post
