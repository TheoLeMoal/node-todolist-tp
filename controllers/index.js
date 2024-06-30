const Task = require('../database/models/task');

function home(req, res){
    res.render('home');
}

function newTaskForm(req, res) {
    res.render('newTask');
}

async function getTasks(req, res) {
    try {
        const tasks = await Task.find();
        res.render('taskList', { tasks });
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

async function getTaskById(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        res.render('task', { task });
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

async function createTask(req, res) {
    try {
        console.log(req.body);
        const { titre, description } = req.body;
        const newTask = new Task({ titre, description });
        await newTask.save();
        res.redirect('/tasks');
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

async function updateTask(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/tasks/${task.id}`);
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

async function deleteTask(req, res) {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/tasks');
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

async function updateTaskStatus(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        task.compeleter = !task.compeleter;
        await task.save();
        res.redirect(`/tasks/${req.params.id}`);
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

async function editTaskForm(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        res.render('editTask', { task });
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

module.exports = {
    home,
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    editTaskForm,
    newTaskForm
};