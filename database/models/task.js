const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  compeleter: {
    type: Boolean,
    default: false,
  },
});

const Task = model("Task", TaskSchema);
module.exports = Task;