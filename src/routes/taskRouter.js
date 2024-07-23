const { Router } = require('express');
const router = Router();

const { storeLogin } = require("../controller/taskController");

router.post('/store/login', storeLogin);

module.exports = router;