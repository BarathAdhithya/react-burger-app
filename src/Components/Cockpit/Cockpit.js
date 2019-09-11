import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  //useContext function is for function based components,
  //whereas static contextType is for class based components
  const authContext = useContext(AuthContext);
  console.log(authContext.isAuthenticated);

  //called only for the first time the component renders
  //note*:use second empty Array parameter for the above behaviour
  // or useEffect() runs each time when the component renders and updates
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    // Http request..
    // setTimeout(() => {
    //   // alert("saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] CleanUp work in useeffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useeffect");
    return () => {
      console.log("[Cockpit.js] CleanUp work in 2nd useeffect");
    };
  });

  //userEffect();

  const assign = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assign.push(classes.red);
    if (props.personsLength <= 1) {
      assign.push(classes.bold);
    }
  }
  return (
    <div className={classes.Cockpit}>
      <h1 className={assign.join(" ")}>
        Hi, This is barath building {props.title} App
      </h1>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}
        <button onClick={authContext.login}>Log in</button>}

    </div>
  );
};

export default React.memo(Cockpit);
