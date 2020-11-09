const express = require('express');
const ClienteController = require ('../controllers/clienteController');
const router = express.Router();
 
router.post('/usuarios', ClienteController.Insert);
router.get('/usuarios', ClienteController.SelectAll);
router.get('/usuarios/:id', ClienteController.SelectDetail);
router.put('/usuarios/:id', ClienteController.Update);
router.delete('/usuarios/:id', ClienteController.Delete);

 
module.exports = router;