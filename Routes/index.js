const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    return res.send({message: 'Método GET ok'});
})

router.post('/', (req, res) =>{
    return res.send({message: 'Método POST ok'});
})
module.exports = router;