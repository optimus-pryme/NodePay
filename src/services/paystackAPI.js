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
            resolve(JSON.parse(data))
        })
        });
        res.on('error', error => {
        reject(error)}
        )
        req.end()
    })
}

/**
 * Promisifying function that calls Paystack API for payment verfication using the reference
 * @param {*} options 
 * @returns a bearer token 
 */
function verifyRef(options) {
  return new Promise((resolve, reject) => {
    const req = https.get(options, res => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
        console.log(data);
      });
      res.on('end', () => {
        console.log(JSON.parse(data));
        resolve(JSON.parse(data));
      }).on('error', error => {
        console.log(error);
        reject(error);
      });
      req.end();
    });
  });
}


module.exports = { getAuthURL, verifyRef }