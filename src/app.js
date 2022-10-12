const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const paymentRouter = require('./routes/initializePayment');


app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/api/v1', paymentRouter)


app.listen(app.get('port'),(err)=>{
    if (err){
        return console.error(err)
    }

    return console.log(
        `server is listening on http://localhost:${app.get('port')}`
    )
})