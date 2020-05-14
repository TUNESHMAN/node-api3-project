// code away!
// import the server
require("dotenv").config()
const server = require("./server");
// choose a port and set environment variables
const port = process.env.PORT;


// listen to the server
server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
