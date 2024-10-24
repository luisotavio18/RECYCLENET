const { Router } = require('express');
const router = Router();
const { entrarPost } = require("../controller/entrarController");

/**
 * @swagger
 * /api/store/entrar:
 *   post:
 *     summary: Verifica o login de um usuário
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
 *     responses:
 *       201:
 *         description: Login verificado com sucesso
 *       400:
 *         description: Ocorreu um erro na verificação
 */
router.post('/store/entrar', entrarPost);

module.exports = router;
