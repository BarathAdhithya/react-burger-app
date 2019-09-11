import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// import Radium from "radium";
import classes from "./Person.css";
import Aux from "../../../hoc/auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    // document.querySelector('input').focus();
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.isAuthenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    // return [
    //   <p onClick={this.props.click} key="a">
    //     I'am a {this.props.name} and I am {this.props.age} years old!!
    //   </p>,
    //   <p key="b">{this.props.children}</p>,
    //   <input
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //     key="c"
    //   />
    // ];
    return (
      // <Fragment>
      <Aux>
        {/* <AuthContext.Consumer>
          {(context) =>
            context.isAuthenticated ? <p>Authenticated </p> : <p>please log in</p>
          }
        </AuthContext.Consumer> */}


          {this.context.isAuthenticated ? <p>Authenticated </p> : <p>please log in</p>
          }
  

        <p onClick={this.props.click} key="a">
          I'am a {this.props.name} and I am {this.props.age} years old!!
        </p>
        <p key="b">{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          key="c"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          //above method only works for class based components
          ref={this.inputElementRef}
        />
      </Aux>
      // </Fragment>
    );
  }
}

//npm run eject
//npx react-codemod rename-unsafe-lifecycles  --force ?????? to append unsafe before unsafe life cycle methods
//npm install --save prop-types
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

// export default Radium(person);
export default withClass(Person, classes.Person);
