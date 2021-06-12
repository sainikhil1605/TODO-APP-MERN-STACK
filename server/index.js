const express = require("express");
const mongoose = require("mongoose")
const PORT = 4000;
const app = express();
const mongooDB = "mongodb://localhost/todo"
mongoose.connect(mongooDB, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, () => console.log(`Server running on ${PORT}`));