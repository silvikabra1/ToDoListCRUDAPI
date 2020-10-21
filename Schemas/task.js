const mongoose = require ("mongoose");

const taskSchema = new mongoose.Schema ({
    title : String,
    checked : Boolean,
})

const task = mongoose.model("task", taskSchema);
module.exports = task;