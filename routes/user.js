const express = require('express');
const router = express.Router();
const User = require('../controller/controllerUser')


router.get('/',User.get);


module.exports  = router;
