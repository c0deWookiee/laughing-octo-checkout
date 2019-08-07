import React from "react";
import FinalFormEntry from "./finalFormEntry.jsx";
const FinalFormList = props => {
  return (
    <div>
      {Object.keys(props.form).map((key, index) => {
        if (key === "Password") return undefined;
        return <FinalFormEntry Key={key} val={props.form[key]} />;
      })}
    </div>
  );
};

export default FinalFormList;
