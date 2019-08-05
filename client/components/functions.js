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
  console.log("pos", data);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};
const patchData = function(url, data = this.state) {
  data.orderID = this.props.orderID;
  data.Form = this.props.form;
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

const handleClick = function(Form = this.props.form, orderID) {
  this.setState(
    () => {
      let output = {};
      if (orderID) output.orderID = orderID;
      output[Form] = true;
      return output;
    },
    () => console.log(this.state)
  );
};

const orderID = () => {
  return Math.random() * 10000000000000000;
};

module.exports = { handleSubmit, handleClick, postData, patchData, orderID };
