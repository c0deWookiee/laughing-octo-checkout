import React from "react";

const inputBar = props => {
  return (
    <div>
      {props.title}:
      <input
        type="text"
        onChange={e => {
          props.handleSubmit(e, props.title);
        }}
      />
    </div>
  );
};

export default inputBar;
