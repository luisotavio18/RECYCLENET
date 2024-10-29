const { Router } = require('express');
const upload = require('../config/multer');
const router = Router();
const { storePost } = require("../controller/postController");

/**
 * @swagger
 * /api/store/post:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: O título do post
 *               mensagem:
 *                 type: string
 *                 description: A mensagem do post
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: O arquivo a ser enviado no post
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *       400:
 *         description: Ocorreu um erro ao criar o post
 */
router.post('/store/post', upload.single('file'), storePost);

module.exports = router;
