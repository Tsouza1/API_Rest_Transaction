const express = require('express')
const router = express.Router();

router.post('/', (req, res, next) =>{

    //Adquirente A
    const { Adquirente } = req.body;
    if(Adquirente.toUpperCase() == "A"){
        const { Bandeira } = req.body;

        //Bandeira VISA
        if(Bandeira.toLowerCase() == "visa"){
            const { Tipo } = req.body;

            // CREDITO
            if(Tipo.toLowerCase() == "credito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*2.25)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }
            // DEBITO
            else if(Tipo.toLowerCase() == "debito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*2)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }    
        }
        // Bandeira MASTER
        else if(Bandeira.toLowerCase() == "master"){
            const { Tipo } = req.body;

            // CREDITO
            if(Tipo.toLowerCase() == "credito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*2.35)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }

            // DEBITO
            else if(Tipo.toLowerCase() == "debito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*1.98)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }    
        }
        else
            return res.status(400).send({ erro: "Esta bandeira não existe" });
    }

    // Adquirente B
    else if(Adquirente.toUpperCase() == "B"){
        const { Bandeira } = req.body;

        //Bandeira VISA
        if(Bandeira.toLowerCase() == "visa"){
            const { Tipo } = req.body;

            // CREDITO
            if(Tipo.toLowerCase() == "credito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*2.50)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }
            // DEBITO
            else if(Tipo.toLowerCase() == "debito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*2.08)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }    
        }
        // Bandeira MASTER
        else if(Bandeira.toLowerCase() == "master"){
            const { Tipo } = req.body;

            // CREDITO
            if(Tipo.toLowerCase() == "credito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*2.65)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }

            // DEBITO
            else if(Tipo.toLowerCase() == "debito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*1.75)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }    
        }
        else
            return res.status(400).send({ erro: "Esta bandeira não existe" });
    }
    // Adquirente C
    else if(Adquirente.toUpperCase() == "C"){
        const { Bandeira } = req.body;

        //Bandeira VISA
        if(Bandeira.toLowerCase() == "visa"){
            const { Tipo } = req.body;

            // CREDITO
            if(Tipo.toLowerCase() == "credito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*2.75)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }
            // DEBITO
            else if(Tipo.toLowerCase() == "debito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*2.16)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }    
        }
        // Bandeira MASTER
        else if(Bandeira.toLowerCase() == "master"){
            const { Tipo } = req.body;

            // CREDITO
            if(Tipo.toLowerCase() == "credito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*3.10)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }

            // DEBITO
            else if(Tipo.toLowerCase() == "debito")
            {
                var { Valor } = req.body; 
                var discont = (Valor*1.58)/100;
                var ValorLiquido = Valor-discont; 
                return res.json({ ValorLiquido });
            }    
        }
        else
            return res.status(400).send({ erro: "Esta bandeira não existe" });
    }
});

module.exports = router;