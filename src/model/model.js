const express = require('express')
const router = express.Router();

router.post('/', (req, res, next) =>{
    // const model = {
    //     Valor: req.body.valor,
    //     Adquirente: req.body.Adquirente,
    //     Bandeira: req.body.Bandeira,
    //     Tipo: req.body.Tipo
    // };
    
    const { Adquirente } = req.body;
    if(Adquirente.toUpperCase() == "A"){
        const { Bandeira } = req.body;
        if(Bandeira.toLowerCase() == "visa"){
            const { Tipo } = req.body;
            if(Tipo.toLowerCase() == "credito")
                return res.status(400).send({ erro: "krl1" });
            else
                return res.status(400).send({ erro: "krl50" });    
        }
        else if(Bandeira.toLowerCase() == "master")
            return res.status(400).send({ erro: "krl0" });
        else
            return res.status(400).send({ erro: "Esta bandeira não existe" });
    }
        
    
    
    
    
        if(Adquirente.toUpperCase() == "B")
        return res.status(400).send({ erro: "krl2" });
    if(Adquirente.toUpperCase() == "C")
        return res.status(400).send({ erro: "krl3" });
    // res.status(201).json({
    //     model: model
    // });
});

module.exports = router;