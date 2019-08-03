const handleSubmit = function(e, stateName) {
  let val = e.target.value;
  this.setState(
    () => {
      let output = {};
      output[stateName] = val;
      return output;
    },
    () => {
      console.log(this.state[stateName]);
    }
  );
};

const handleClick = function(Form) {
  this.setState(
    () => {
      let output = {};
      output[Form] = true;
      return output;
    },
    () => console.log(this.state)
  );
};

module.exports = { handleSubmit, handleClick };
