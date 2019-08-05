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
const postData = function(url, data = this.state) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};
const patchData = function(url, data = this.state) {
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
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

module.exports = { handleSubmit, handleClick, postData, patchData };
