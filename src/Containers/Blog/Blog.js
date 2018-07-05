import React, { Component } from "react";
// import axios from "axios"; // axios for get requests in React
import classes from "./Blog.css";
import Posts from "./Posts/Posts";
// import axiosInstance from "../../axios"; // You can use this with different config settings
// axiosInstance.get("https://example.com").then(response=>{console.log(response)})

class Blog extends Component {
  render() {
    return (
      <div className = {classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Posts />
      </div>
    );
  }
}

export default Blog;
