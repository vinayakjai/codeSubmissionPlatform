const express=require('express');
const { problems } = require('../../controllers');

const problemsRouter=express.Router();

problemsRouter.get('/',problems.getProblems);
problemsRouter.get('/:id',problems.getProblem);
problemsRouter.post('/',problems.createProblem);
problemsRouter.put('/:id',problems.updateProblem);

module.exports=problemsRouter;