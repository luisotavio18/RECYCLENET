const { Router } = require('express');
const router = Router();

const { storePost } = require("../controller/postController");

router.post('/store/post', storePost);

module.exports = router;