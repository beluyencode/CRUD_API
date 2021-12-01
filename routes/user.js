const express = require('express');
const router = express.Router();
const User = require('../controller/controllerUser')
const userMiddleware = require('../middleware/userMiddleware');

router.get('/',userMiddleware,User.get);


module.exports  = router;
