import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
// import Radium, {StyleRoot} from 'radium';

class app extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Ram",
        age: 10
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
    showPersons: false
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

    this.setState({
      persons: persons
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

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      color: "white",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={index + "person.name"}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    // let classes = ['red','bold'].join(' ');

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
      if (this.state.persons.length <= 1) {
        classes.push("bold");
      }
    }

    return (
      <div className="App">
        <h1 className={classes.join(" ")}>Hi, This is barath</h1>
        <button style={style} onClick={() => this.togglePersonHandler()}>
          Switch Name
        </button>

        <UserInput
          onChangeUserInput={this.changeInputNameHandler}
          value={this.state.userNameInput}
        />
        {persons}
        <UserOutput userName={this.state.userNameInput} />
        <UserOutput />
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi, This\' is barath!!!!!'));
  }
}

export default app;
