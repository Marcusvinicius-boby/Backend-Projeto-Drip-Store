var express = require('express');
var router = express.Router();
const ProcutsController = require("../controllers/productsController");

router.get('/', ProcutsController.getAllProduct)
router.post('/', ProcutsController.createProducts)

module.exports = router;
