const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.get_todos);
router.post('/', todoController.create_todo);
router.delete('/', todoController.delete_todo);

module.exports = router;