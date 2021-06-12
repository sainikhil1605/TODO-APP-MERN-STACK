const todoModel = require("../models/todoModel")

exports.getTodo = (req, res) => {
    todoModel.find({}, (err, doc) => {
        res.send(doc);
    })
}
exports.postTodo = (req, res) => {
    console.log("hi");
    console.log(req.body);
    const todoData = new todoModel(req.body);
    todoData.save((err) => {
        if (!err) {
            res.send("To-do added");
        }
        else {
            res.send(err);
        }
    })
}
exports.deleteTodo = (req, res) => {
    todoModel.remove({ todo_id: req.params.todo_id }, function (err) {
        if (!err) {
            res.send("Deleted");
        }
        else {
            res.send(err);
        }
    })
}