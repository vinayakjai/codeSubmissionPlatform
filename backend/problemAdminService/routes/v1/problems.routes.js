const express=require('express');
const { problems } = require('../../controllers');

const problemsRouter=express.Router();


//get routes
problemsRouter.get('/',problems.getProblems);
problemsRouter.get('/:id',problems.getProblem);

//post routes
problemsRouter.post('/',problems.createProblem);

//put routes
problemsRouter.put('/:id',problems.updateProblem);

//delete routes
problemsRouter.delete('/:id',problems.deleteProblem);

module.exports=problemsRouter;