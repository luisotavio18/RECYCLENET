const { Router } = require('express');
const router = Router();
const { getDados } = require("../controller/dadosController");

/**
 * @swagger
 * /api/dados:
 *   get:
 *     summary: Obtém todos os dados do banco
 *     tags: [Dados]
 *     responses:
 *       200:
 *         description: Dados obtidos com sucesso
 *       400:
 *         description: Ocorreu um erro ao obter os dados
 */
router.get('/dados', getDados);

module.exports = router;
