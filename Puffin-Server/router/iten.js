const   router = require('express').Router(),
        ItensController = require('../controllers/ItensController')

router.get('/', ItensController.busca_itens)

module.exports = router