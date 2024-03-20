const express=require('express');

const { PORT } = require('./config/serverConfig');

//importing middleawares
const bodyParser=require('body-parser');
const apiRouter = require('./routes');

const app=express();

//initializing middlewares

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json());


//enabling routing
app.use('/api',apiRouter);


//dummy pin request to chk wheter routiing is working properly or not,
app.get('/ping',(req,res)=>{
    return res.json({
        msg:'pong',
    })
})

app.listen(PORT,()=>{
    console.log(`server is listning at port ${PORT}`);
})