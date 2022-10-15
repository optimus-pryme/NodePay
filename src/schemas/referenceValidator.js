const Ajv = require("ajv")
const ajv = new Ajv({allErrors: true})


const referenceSchema = {
  type: "object",
  properties:{
    apiKey:{type:"string"},
  },
  required:["apiKey"],
  additionalProperties: false
}

const validateReference = ajv.compile(referenceSchema);
const referenceValidator = (data) => {
  const valid  = validateReference(data);
  if(valid) return{ valid, data};
  return {valid, error: validateReference.errors}
}

module.exports = referenceValidator;