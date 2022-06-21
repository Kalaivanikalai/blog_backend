const express = require('express')
const router = express.Router();

const {allUser, login, signup } = require('../controllers/user')

router.route('/').get(allUser);
router.route('/signup').post(signup);
router.route('/login').post(login);

module.exports = router;