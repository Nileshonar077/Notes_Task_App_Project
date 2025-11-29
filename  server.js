const express = require("express");
const cors = require("cors");
const app = express();

const tasksRoute = require("./src/routes/tasksRoute");
const auth = require("./src/middlewares/authRequire");
const errorHandler = require("./src/middlewares/errorHandler");

app.use(cors());
app.use(express.json());

app.use(auth);

app.use("/api/tasks", tasksRoute);

app.use(errorHandler);

app.listen(5000, () => console.log("Server running on port 5000"));
