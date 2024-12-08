const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

mongoose
  .connect(
    "mongodb+srv://kareemwajud:G7qYpwsYMCNYYRLm@cluster0.3lngn.mongodb.net/"
  )
  .then(() => {
    console.log("Database is connected.");
    app.listen(PORT, console.log("Server is running on PORT: ", PORT));
  })
  .catch((err) => console.log("An error occured", err));
