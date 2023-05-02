const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const commentRoutes = require("./routes/commentRoutes");
const likeRoutes = require("./routes/likeRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/", commentRoutes);
app.use("/", likeRoutes);
app.use("/", postRoutes);
app.use("/", userRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server started on http://localhost:8000")
);
