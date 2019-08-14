import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p>Paragraph 1 {props.userName}</p>
      <p>Paragraph 2</p>
    </div>
  );
}

export default UserOutput;
