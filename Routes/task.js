const express = require("express");
const task = require("../Schemas/task");
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await task.find();
    res.send(result);
})

router.get("/:id", async (req, res) => {
    const result = await task.findById(req.params.id);
    res.send(result);
});

router.delete("/:id" , async (req, res) => {
    const result = await task.findByIdAndDelete(req.params.id)
    res.send(result);
})

router.post ("/" , async (req, res) => {
    const newTask = new task;
    newTask.title = req.body.title;
    newTask.checked = req.body.checked
   const result = await newTask.save();
   res.send(result);
})

router.put("/:id", async (req, res) => {
   const result = await task.findByIdAndUpdate(req.params.id, req.body);
   res.send(result);
})

module.exports = router