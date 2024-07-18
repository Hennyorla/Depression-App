const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sanitizer = require("perfect-express-sanitizer");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const professionalRoute = require("./routes/professionalRoute");
const sessionRoutes = require("./routes/sessionRoute");
const resourceRoutes = require("./routes/resourseRoutes");
const { CLIENT_URL } = require("./config/index");
const app = express();

//global middleware configuration

const corsOptions = {
  origin: [CLIENT_URL],
  optionsSuccessStatus: 200,
  credentials: true,
};

//globalmiddleware configuration for cookie-parser
app.use(cookieParser());

//global middleware configuration for cors
app.use(cors(corsOptions));

// accept json data in the request body or from the client
app.use(express.json());

// global middleware configuration for sanitizing user input
// app.use(
//   sanitizer.clean({
//     xss: true,
//     noSql: true,
//     sql: true,
//   })
// );

//router configuration as a global middleware
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/professionals", professionalRoute);
app.use("/sessions", sessionRoutes);
app.use("/resources", resourceRoutes);

//root route
app.get("/", (req, res) => {
  res.send("SERVER IS ALIVE");
});

module.exports = app;
