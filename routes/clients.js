const router = require('express').Router();
const passport = require('passport');
const clientCtrl = require('../controllers/clients')
const isLoggedIn = require('../config/auth');


router.get('/', clientCtrl.homepage);
router.get('/', clientCtrl.dashShow);
router.get('/new', isLoggedIn, clientCtrl.new)
router.post('/', clientCtrl.create)

module.exports = router;