import React, {Component} from 'react';


const HelloWorld = (props) => (
  <div>
    <h2>Hello <em>{props.firstName}</em> {props.lastName}</h2>

  </div>

)

/*function HelloWorld(props){
  return(
    <div>
      <h2>Hello <em>{props.name}</em></h2>

    </div>
  );
}*/

/*class HelloWorld extends Component {
  render() {
    return(
      <div>
        <h2>Hello <em>{this.props.name}</em></h2>

      </div>
    );
  }
}*/

export default HelloWorld;
