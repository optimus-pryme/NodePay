const https = require('https');

/**
 * 
 * @param {*} options -> this is the header options that are required.
 * Paystack requires an API secret key to be as bearer token
 * @param {*} params -> customer email, and amount to be charged.
 * @example: 
 *
 * const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}
 */
const getAuthURL = (options,params) =>{
    return new Promise( (resolve,reject) =>{
        //perform an https rest call to paystack API   
        const req = https.request(options, res => {
        let data = ''
        res.on('data', (chunk) => {
            data += chunk
        });
        res.on('end', () => {
            console.log(JSON.parse(data))
            resolve(JSON.parse(data))
        })
        }).on('error', error => {
        console.error(error)
        reject(error)})

        req.write(params)
        req.end()
    })
}




module.exports = getAuthURL;