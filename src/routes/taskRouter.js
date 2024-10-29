const { Router } = require('express');
const router = Router();
const { storeLogin } = require("../controller/taskController");

/**
 * @swagger
 * /api/store/login:
 *   post:
 *     summary: Cadastrar novo login
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do usuário
 *               senha:
 *                 type: string
 *                 description: A senha do usuário
 *     responses:
 *       201:
 *         description: Login criado com sucesso
 *       400:
 *         description: Ocorreu um erro na requisição
 */
router.post('/store/login', storeLogin);

module.exports = router;
