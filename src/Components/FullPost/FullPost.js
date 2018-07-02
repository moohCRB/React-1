import React, {Component} from "react";

class FullPost extends Component{
render(){
let post = <p> Please select a Post! </p>
post = (
    <div>
        <h1>Title</h1>
        <p>Content</p>
        <div>
            <button className="Delete">Delete</button>
            </div>
            </div>
);
return post;
}
}

export default FullPost;