const router = require('express').Router();
const passport = require('passport');
const apptCtrl = require('../controllers/appointments')

router.get('/new', apptCtrl.new)
router.post('/clients/:id/appointments', apptCtrl.create)
router.delete('/appointments/:id', apptCtrl.delete)
// router.get('/', apptCtrl.show)
// router.put('/appointments/:id', apptCtrl.update)

module.exports = router;
