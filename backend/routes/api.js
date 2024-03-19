const express = require('express');
const {createUser, readUser, updateUser, deleteUser} = require("../controller/UserController");
const router = express.Router();

router.post('/create',createUser);
router.get('/read',readUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

module.exports = router;