const express = require('express')
const router = express.Router();
const getAuthURL = require('../services/paystackAPI')
const paymentValidator = require('../schemas/paymentValidator')



router.post('/initialize-payment', async(req,res) => {
    try {
        const {valid,data,error } = paymentValidator(req.body);
        if (!valid){
            res.status(400).json({
                status_code : 400,
                status_message : 'inappropriate data',
                error: error
            });
            return;
        }

        const {apiKey}  = data;
        const {email}   = data;
        const {amount}  = data;
        
        // console.log('key is ',apiKey);
        // console.log('email is ',email);
        // console.log('amount is ',amount);

        requestOptions ={
            hostname: 'api.paystack.co',
            port: 443,
            path: '/transaction/initialize',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
  }
        };


        requestParam =JSON.stringify({
            email: email,
            amount: amount
        })

        console.log('options is ', requestOptions);
        console.log('param is ',requestParam);

        getAuthURL(requestOptions,requestParam).then((apiResponse) =>{
            res.send(apiResponse);
        }).catch(err => {
            res.send({
                message: 'errror occurred',
                error: err
            });
        }) 

        // const reqq = https.request(requestOptions, res => {
        // let data = ''
        // res.on('data', (chunk) => {
        //     data += chunk
        // });
        // res.on('end', () => {
        //     console.log(JSON.parse(data))
            
        // })
        // }).on('error', error => {
        // console.error(error)
        // res.send(error)
        // })
        // reqq.write(requestParam)
        // reqq.end()
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status_code:500,
            status_message: 'internal server error',
            error: error
        })
    }
})


router.post('/test',(req,res) =>{
    const {name} = req.body;
    console.log(req.boady);
    res.send('thank you')
})


module.exports =  router;