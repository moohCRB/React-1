import React, { Component } from "react";
import axios from "axios"; // axios for get requests in React
import FullPost from "../../Components/FullPost/FullPost";
import Post from "../../Components/Post/Post";
import NewPost from "../../Components/NewPost/NewPost";
// import axiosInstance from "../../axios"; // You can use this with different config settings

// axiosInstance.get("https://example.com").then(response=>{console.log(response)})

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error:false
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // Can't save this to a variable as its
      // asynchronous. Therefore, we have to use promises.
      // Then is a method that takes a function as an argument that will execute when the GET is complete
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Ibrahim"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log(response.data);
      })
      .catch(error =>{
          console.log(error);
          this.setState({error:true}) // from here you can render an error component
      });
  }

  postSelectedHandler = (id)=>{
this.setState({selectedPostId:id})
  }
  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} author={post.author} clicked={()=>this.postSelectedHandler(post.id)}/>;
    });
    return (
      <div>
        <section>{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>

  
    );
  }
}

export default Blog;
