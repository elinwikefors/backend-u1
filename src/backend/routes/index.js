const express = require('express');
const router = express.Router();

const studentMtds = require('./methods.js');

router.get('/students', studentMtds.getStudents);
router.get('/students/:id', studentMtds.getStudentsId);
router.post('/students', studentMtds.createStudents);
router.put('/students/:id', studentMtds.replaceStudents);
router.delete('/students/:id', studentMtds.deleteStudents);

module.exports = router;