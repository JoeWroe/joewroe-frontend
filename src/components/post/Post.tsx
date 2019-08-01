import React, { Component } from "react";
import axios from "axios";

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
            <div>
                <h1>{ this.state.title }</h1>
                <p>{ this.state.body }</p>
            </div>
        ) : (
            <div>
                <p>Loading Posts...</p>
            </div>
        )

        return (
            <div>{ post }</div>
        )
    }
}

export default Post
