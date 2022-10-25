const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const homeRoute = require("./routes/homeRoute");
const dataRoute = require("./routes/dataRoute");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);

// Routes
//app.get("/", (req, res) => res.redirect(301, "http://localhost:5000/data"));
//app.use("/", homeRoute); // Redirect to Data route if any request is made to home route
app.use("/data", dataRoute);

const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is listening on Port ${PORT}`);
//     });
//   })
//   .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`server is listening on PORT ${PORT}`));
