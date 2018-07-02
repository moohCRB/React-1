import React, { Component } from "react";
import axios from "axios"; // axios for get requests in React
import FullPost from "../../Components/FullPost/FullPost";
import Post from "../../Components/Post/Post";
import NewPost from "../../Components/NewPost/NewPost";


class Blog extends Component {
    componentDidMount(){
axios.get("https://jsonplaceholder.typicode.com/posts")  // Can't save this to a variable as its
// asynchronous. Therefore, we have to use promises.
// Then is a method that takes a function as an argument that will execute when the GET is complete
 .then(response => {
     console.log(response);
 })

    }

  render() {
    return (
      <div>
        <section>
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog