const { Router } = require('express');
const upload = require('../config/multer');
const router = Router();

const { storePost } = require("../controller/postController");

router.post('/store/post', upload.single('file'), storePost);

module.exports = router;