const   router = require('express').Router(),
        UsrController = require('../controllers/UserController')

router.post('/login', UsrController.user_login)
router.post('/autenticar', UsrController.autenticar)

module.exports = router