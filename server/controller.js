module.exports = {
  post: (req, res) => {
    console.log("this is a post");
  },
  get: (req, res) => {
    console.log("this is a get");
    res.send("you made a get");
  },

  put: (req, res) => {
    console.log("this is a put");
  }
};
