const express=require('express');
const v1Router = require('./v1');
const apiRouter=express.Router();


//v1 routes
apiRouter.use('/v1',v1Router);


//v2 routes..

module.exports=apiRouter;