const { Router } = require('express');
const router = Router();

const { getDados } = require("../controller/dadosController");

router.get('/dados', getDados);

module.exports = router;