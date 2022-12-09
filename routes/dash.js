const express = require('express');
const router = express.Router();
const clientCtrl = require('../controllers/clients');

router.get('/', clientCtrl.dashShow)
router.post('/', clientCtrl.create)
router.get('/showMy', clientCtrl.index)


module.exports = router;