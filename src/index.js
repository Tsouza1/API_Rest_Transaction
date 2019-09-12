const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./model/model');

app.use('/transaction', routes);



app.get('/mrd', (req, res) => {
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

    res.json([AdquirenteA,AdquirenteB,AdquirenteC])
})

// app.post('/transaction', (req, res) =>{
//     const model = {
//         name: req.body.name,
//     };
    
//     res.status(201).json({
//         message: 'Foi krl',
//         model: model
//     });
// });




app.listen(3000);

console.log("Server running on port 3000");