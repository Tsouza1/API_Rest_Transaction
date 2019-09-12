const express = require('express')
const router = express.Router();


router.get('/', (req, res, next) =>{

    const AdquirenteA = 
    {
        "Adquirente" : "Adquirente A",
        "Taxas" : [
            {
                "Bandeira" : "Visa",
                "Credito" : "2.25",
                "Debito" : "2.00"
            },
            {
                "Bandeira" : "Master",
                "Credito" : "2.35",
                "Debito" : "1.98"
            }
        ]
    }

    const AdquirenteB =
    {
        "Adquirente" : "Adquirente B",
        "Taxas" : [
            {
                "Bandeira" : "Visa",
                "Credito" : "2.50",
                "Debito" : "2.08"
            },
            {
                "Bandeira" : "Master",
                "Credito" : "2.65",
                "Debito" : "1.75"
            }
        ]
    }
    const AdquirenteC =
    {
        "Adquirente" : "Adquirente C",
        "Taxas" : [
            {
                "Bandeira" : "Visa",
                "Credito" : "2.75",
                "Debito" : "2.16"
            },
            {
                "Bandeira" : "Master",
                "Credito" : "3.10",
                "Debito" : "1.58"
            }
        ]
    }  

    return res.json([AdquirenteA,AdquirenteB,AdquirenteC])

});


module.exports = router;