const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const {DB_HOST, PORT = 3000} = process.env;

mongoose.set('strictQuery', false);

mongoose.connect(DB_HOST

).then(() => {
  console.log("Database connection successful");
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
});

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
