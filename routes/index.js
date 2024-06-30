const express = require("express");
const router = express.Router();
const {
    home,
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    editTaskForm,
    newTaskForm
} = require('../controllers/index');

/**
 * Je n'arrive pas a utiliser les routes delete et put pour les formulaire mais sinon avec postman ça fonctionne !
 */

// Routes pour les tâches
router.get('', home);
router.get('/tasks', getTasks);
router.get('/tasks/new', newTaskForm);
router.post('/tasks', createTask);
router.get('/tasks/:id', getTaskById);
router.post('/tasks/:id/status', updateTaskStatus);
router.get('/tasks/:id/edit', editTaskForm);
router.post('/tasks/:id/update', updateTask);
router.post('/tasks/:id/delete', deleteTask);

//router.delete('/tasks/:id', deleteTask);
//router.put('/tasks/:id', updateTask);

module.exports = router;