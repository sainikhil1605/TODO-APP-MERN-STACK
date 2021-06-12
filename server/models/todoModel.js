const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);
const TodoSchema = new Schema({
    todo_id: {
        type: Number,
    },
    user_id: {
        type: String,
    },
    todo: {
        type: String
    }
})
TodoSchema.plugin(autoIncrement.plugin, { model: "todoModel", field: "todo_id" })
const todoModel = mongoose.model('todoModel', TodoSchema);
module.exports = todoModel;