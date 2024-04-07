const DbError = require("../errors/dbError");
const { Problems } = require("../models");

class ProblemRepository {
  async createProblem(problemsData) {
    try {
      const problem = Problems.create({
        title: problemsData.title,
        description: problemsData.description,
        difficulty: problemsData.difficulty,
        editorial: problemsData.editorial,
        testCases: problemsData.testCases ? problemsData.testCases : [],
      });
      return problem;
    } catch (error) {
        return next(new DbError('unable to create problem in database',error));
    }
  }

  async getProblems(){
    try{
      const problems=await Problems.find({});
      return problems;
    }catch(error){
      return next(new DbError('unable to fetch problems from database',error));
    }

  }

  async getProblem(problemId){
    try{
      const problem=await Problems.findById(problemId);
      return problem;
    }catch(error){
      return next(new DbError('unable to fetch problem from database',error));
    }
  }

  async updateProblem(problemId,updatedProblemData){
    try{
      const updatedProblem=await Problems.findByIdAndUpdate(problemId,{
        title:updatedProblemData.title,
        description:updatedProblemData.description,
        testCases:updatedProblemData.testCases,
      })
      return updatedProblem;
    }catch(error){
      return next(new DbError('unable to update problem in database',error));
    }
  }

  async updateProblem(problemId,updatedProblemData){
    try{
      await Problems.findByIdAndDelete(problemId);
    
    }catch(error){
      return next(new DbError('unable to delete problem in database',error));
    }
  }
}

module.exports = ProblemRepository;
