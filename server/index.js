const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { getTodo, postTodo, deleteTodo } = require("./controllers/todoController");
const PORT = 4000;
const app = express();
app.use(express.json())
app.use(cors());
const mongooDB = "mongodb://localhost/todo"
mongoose.connect(mongooDB, { useNewUrlParser: true, useUnifiedTopology: true });
app.get("/", getTodo);
app.post("/", postTodo);
app.delete("/:todo_id", deleteTodo);
app.listen(PORT, () => console.log(`Server running on ${PORT}`));