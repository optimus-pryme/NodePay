const Ajv = require("ajv")
const ajv = new Ajv({allErrors: true})

//schema required to validate the req.body
const paymentSchema = {
  type: "object",
  properties: {
    apiKey: {type: "string"},
    email: {type: "string"},
    amount: {type: "string"}
  },
  required: ["apiKey","email","amount"],
  additionalProperties: false
}



const validatePayment = ajv.compile(paymentSchema);
const paymentValidator = (data) => {
    const valid = validatePayment( data );
    if ( valid ) return { valid, data };
    return { valid, error: validatePayment.errors };
};


module.exports = paymentValidator;