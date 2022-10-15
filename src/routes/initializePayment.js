/** Core modules */
const express = require('express')
const router = express.Router();


/**
 * user defined modules 
 */
// const getAuthURL = require('../services/paystackAPI')
const {getAuthURL, verifyRef} =  require('../services/paystackAPI');
const paymentValidator = require('../schemas/paymentValidator');
const referenceValidator = require('../schemas/referenceValidator');



router.get('/verify-payment/:ref', (req,res) =>{
    try {
        const {valid,data,error} = referenceValidator(req.body);
        console.log(req)
        if (!valid){
            res.status(400).json({
                status_code : 400,
                status_message : 'inappropriate data',
                error: error
            });
            return;
        }
        const {ref}         = req.params;
        const {apiKey }     = req.body;

        Options = {
            hostname: 'api.paystack.co',
            port: 443,
            path: `/transaction/verify/`+encodeURIComponent(ref),
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        };

        verifyRef(Options).then( (data) => { 
            res.status(200).send(data);
        } ).catch( (err) => { 
            console.error(err);
            res.send(err);
        } )
    } catch (error) {
        console.error('error occured : ',error)
    }
})



/** Post request to initialise payment. This returns an authorisation url to complete payment */
router.post('/initialize-payment', async(req,res) => {
    try {
        // validate req.body to conform with schema defined
        const {valid,data,error } = paymentValidator(req.body);
        if (!valid){
            res.status(400).json({
                status_code : 400,
                status_message : 'inappropriate data',
                error: error
            });
            return;
        }
        // destructuring validated data returned
        const {apiKey,email,amount}  = data;
        //request option for REST API request to Paystack
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
        // required parameters for paystack API. Param needs to be string
        requestParam =JSON.stringify({
            email: email,
            amount: amount
        })

        //promisified request using https module
        getAuthURL(requestOptions,requestParam).then((apiResponse) =>{
            res.status(200).send(apiResponse);
        }).catch(err => {
            res.send({
                message: 'errror occurred',
                error: err
            });
        }) 

    } catch (error) {
        //catching any server error that may occur
        console.log(error);
        res.status(500).send({
            status_code:500,
            status_message: 'internal server error',
            error: error
        })
    }
})



module.exports =  router;