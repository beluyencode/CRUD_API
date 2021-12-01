const express = require('express');
const router = express.Router();
const User = require('../controller/userController')


router.get('/',User.get);


module.exports  = router;
