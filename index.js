// Importing the Express module
const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');
// Create an instance  of Express
const app = express();

// Define the port
const port = 3000;


main()
async function main() {
  await mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/test?authSource=admin`)
  .then(()=>{
    console.log("Connection established successfully!!");
    console.log("URL ::",`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/test?authSource=admin`);
  }).catch(err => {
    console.log(err)
    setTimeout(main, 5000);
  });
}

app.enable('trust proxy')

// Define a route for the welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Express server !!');
});

app.get('/api/test', async(req, res) => {
  // occupyCpuForAWhile();
  setTimeout(() => {
    console.log("i am here!!");
  }, 1000);
  res.send('Test is performed successfully!!');
});
// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// This function will block the CPU for a while depending on the input value
// function occupyCpuForAWhile() {
//   const start = Date.now();
//   const result = fibonacci(40); // Adjust the value for longer or shorter CPU usage
//   const end = Date.now();
//   console.log(`Fibonacci result: ${result}`);
//   console.log(`Time taken: ${end - start}ms`);
// }

