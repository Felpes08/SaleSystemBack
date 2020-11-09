const express = require('express');
const Pedidos = require ('../controllers/pedidos');
const router = express.Router();
 
router.post('/pedidos', Pedidos.Insert);
router.get('/pedidos', Pedidos.SelectAll);
router.get('/pedidos/:id', Pedidos.SelectDetail);
router.put('/pedidos/:id',  Pedidos.Update);
router.delete('/pedidos/:id', Pedidos.Delete);

module.exports = router;