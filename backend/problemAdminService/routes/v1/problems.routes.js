const express=require('express');
const { problems } = require('../../controllers');
const problemsRouter=express.Router();

problemsRouter.get('/',problems.getProblems);

module.exports=problemsRouter;