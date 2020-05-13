// code away!
// import the server
const server = require("./server");
// choose a port and set environment variables
const port = process.env.PORT || 8000;


// listen to the server
server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
