import React from "react";

//Functional Component with curved braces as like jsx
// const WithClass = props => (
//   <div className={props.classes}>{props.children}</div>
// );

//first component should always start with capital letter
const withClass = (WrappedComponent, className) => {
  return  (props) => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  ); //curved braces are omitted by the vscode to refer jsx code when trying to prettify it
};

export default withClass;
