import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";


class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // componentWillUpdate(){

  // }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Person.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed
  //   ) {
  //     // alert('equal');
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // getSnapshotBeforeUpdate(pervProps, prevState) {
  //   // alert('getSnapshotbeforeUpdate');
  //   console.log("[Persons.js] getSnapshotBeforeUpdate");
  //   return { message: "Snapshot" };
  // }

  componentDidUpdate(pervProps, prevState, snapshot) {
    // alert('componentDidUpdate');
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("[Persons.js] rendering,,,");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={index + "person.name"}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
