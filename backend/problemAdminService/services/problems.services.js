const NotFound = require("../errors/notFound");
const { markdownSanitizer } = require("../utils");

class ProblemService{
    constructor(problemRepository){
        this.problemRepository=problemRepository;
    }

    async createProblem(problemData){
      try{
        problemData.description=markdownSanitizer(problemData.description);
        const problem=await this.problemRepository.createProblem(problemData);
        return problem;
      }catch(error){
        throw error;
      }
    }

    async getProblems(){
      try{
       const problems=await this.problemRepository.getProblems();
       return problems;
     
      }catch(error){
        throw error;
      }
    }

    async getProblem(problemId){
      try{
         const problemData=await this.problemRepository.getProblem(problemId);
         return problemData;
      }catch(error){
        throw error;
      }
    }

    async updateProblem(problemId,updatedProblemData){
      try{
         const updatedProblemData=await this.problemRepository.updateProblem(problemId,updatedProblemData);
         return updatedProblemData;
      }catch(error){
        throw error;
      }
    }

    async deleteProblem(problemId){
      try{
         await this.problemRepository.updateProblem(problemId);
         
      }catch(error){
        throw error;
      }
    }
}

module.exports=ProblemService;