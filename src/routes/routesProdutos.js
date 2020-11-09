const express = require('express');
const Produtos = require ('../controllers/produtos');
const router = express.Router();
 
router.post('/produtos', Produtos.Insert);
router.get('/produtos', Produtos.SelectAll);
router.get('/produtos/:id', Produtos.SelectDetail);
router.put('/produtos/:id', Produtos.Update);
router.delete('/produtos/:id', Produtos.Delete);
 
module.exports = router;
