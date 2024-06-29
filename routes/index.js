const express = require("express");
const router = express.Router();
const {
    home,
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/index');

// Routes pour les tâches
router.get('', home);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;