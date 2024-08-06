const { Router } = require('express');
const router = Router();

const { entrarPost } = require("../controller/entrarController");

router.post('/store/entrar', entrarPost);

module.exports = router;