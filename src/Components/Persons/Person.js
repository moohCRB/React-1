// We can use classes to create components, and we have to for handling the state, however
// most of the time we should use a JS function, because at its simplest form, a component
// is just a function that returns some JSX.

// There's two ways to style components:
// 
import React,{Component} from 'react';
import './Person/Person.css'; // file extension must be included... file extensions can only be omitted for JS files


class Person extends Component {
    render(){
      return (
            <div className="Person">
        
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
                {/* Children are a special property given to us by react which is the text in between the <> </> tags that are passed into this component */}
               <p> {this.props.children}</p> 
            {this.props.enableInput&& <input type="text" onChange={this.props.changed} value={this.props.name}/>} {/*two way binding*/}
               {/*onChange will be fired whenever the value of the input changes*/}
                </div>
            )
    }
}
    

export default Person;