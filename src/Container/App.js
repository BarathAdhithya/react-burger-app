import React, { Component } from "react";
import classes from "./App.css";
import UserOutput from "../UserOutput/UserOutput";
import UserInput from "../UserInput/UserInput";
// import Radium, {StyleRoot} from 'radium';
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/auxiliary";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // UNSAFE_componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount()");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  state = {
    persons: [
      {
        id: 1,
        name: "Ram",
        age: "28"
      },
      {
        id: 2,
        name: "Krishna",
        age: 10
      },
      {
        id: 3,
        name: "Sita",
        age: 10
      }
    ],
    otherState: "some other value",
    userNameInput: "initial",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(el => {
      return el.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState((prevState, props) => {
      console.log(prevState.changeCounter + 1);
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  changeInputNameHandler = events => {
    this.setState({
      userNameInput: events.target.value
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  loginHandler = () => {
    this.setState({
      isAuthenticated: true
    });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.isAuthenticated}
          />
        </div>
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          toggle cockpit
        </button>
        <AuthContext.Provider
          value={{
            isAuthenticated: this.state.isAuthenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.title}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
            />
          ) : null}

          {/* 
        <UserInput
          onChangeUserInput={this.changeInputNameHandler}
          value={this.state.userNameInput}
        /> */}
          {persons}
      
        <UserOutput userName={this.state.userNameInput} />
        <UserOutput />
        <div id="app-container" />
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi, This\' is barath!!!!!'));
  }
}

export default withClass(App, classes.App);

// style.backgroundColor = "red";
// let classes = ['red','bold'].join(' ');
