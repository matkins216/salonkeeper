const router = require('express').Router();
const passport = require('passport');
const clientCtrl = require('../controllers/clients')
const isLoggedIn = require('../config/auth');


router.get('/', clientCtrl.homepage);
router.get('/', clientCtrl.dashShow);
router.get('/new', isLoggedIn, clientCtrl.new)
router.post('/', clientCtrl.create)
router.get('/showMy', clientCtrl.index)
router.get('/:id', clientCtrl.show)
router.get('/:id/edit', clientCtrl.edit)
router.put('/:id', clientCtrl.update)
router.delete('/:id', clientCtrl.delete)

module.exports = router;