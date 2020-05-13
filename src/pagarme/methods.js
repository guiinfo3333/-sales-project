const pagarme= require('pagarme');
const User = require("../models/Users");


module.exports ={

     async createTransaction(req,res){

        const {id} = req.params;

        const {nampay,country,
              state,city,
              neighborhood,street,
              street_number,zipcode,
              amount,card_number,
              card_cvv,card_expiration_date,
              card_holder_name,produto} = req.body;

              for(var i =0;i<produto.length;i++){
                produto[i].tangible = true;
              }
             

              const user = await User.findByPk(id);
            console.log(user.phone_number);

        const customer = {
            "external_id": id,
            "name": user.name,
            "type": "individual",
            "country": "br",
            "email": user.email,
            "documents": [
              {
                "type": "cpf",
                "number": user.cpf
              }
            ],
            "phone_numbers": [user.phone_number],
            "birthday": user.birthday};

            const items = produto;
              const billings = {
                "name": nampay,
                "address": {
                  "country": country,
                  "state": state,
                  "city": city,
                  "neighborhood": neighborhood,
                  "street": street,
                  "street_number": street_number,
                  "zipcode": zipcode
                }
              }
              const shipping = {
                
                    "name": nampay,
                    "fee": 1000,
                    "delivery_date": "2000-12-21",
                    "expedited": true,
                    "address": {
                      "country": country,
                      "state": state,
                      "city": city,
                      "neighborhood": neighborhood,
                      "street": street,
                      "street_number": street_number,
                      "zipcode": zipcode
                    }
                  
              }
        try{

           await pagarme.client.connect({ api_key: process.env.KEY_API})
            .then(client => client.transactions.create({
              "amount": amount,
              "card_number": card_number,
              "card_cvv": card_cvv,
              "card_expiration_date": card_expiration_date,
              "postback_url" : "localhost:3000",
              "card_holder_name": card_holder_name,
              "installments": "12",
              "customer": customer,
              "billing":billings,
              "shipping":shipping,
              "items":items
            }))
            .then(transaction => res.json(transaction))
          }
          catch(err){
            res.json(err);;
          }

    },
    async CaptureTransaction(req,res){
      const {id} = req.params;
      try{

            pagarme.client.connect({ api_key:proces.env.KEY_API })
            .then(client => client.transactions.capture({ id: id }))
            res.send(Ok);
          }
          catch(err){
            res.json(err);
          }
    }


}