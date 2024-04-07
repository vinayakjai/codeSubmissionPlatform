const BadRequest = require("../errors/badRequest");
const InternalServerError = require("../errors/internalServerError");
const ProblemRepository = require("../repository/problems.repository");
const { ProblemService } = require("../services");

const problemService = new ProblemService(new ProblemRepository());

async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getProblems();
    return res.status(201).json({
      success: true,
      message: "problems fetched successfully",
      data: problems,
      error: null,
    });
  } catch (error) {
    return next(new InternalServerError(error));
  }
}

async function getProblem(req, res) {
  try {
    let problemData = await problemService.getProblem(req.params.id);
    return res.status(201).json({
      success: true,
      message: "problem fetched successfully",
      data: problemData,
      error: null,
    });
  } catch (error) {
    return next(new InternalServerError(error));
  }
}

async function createProblem(req, res) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(201).json({
      success: true,
      message: "successfully created theb problem",
      data: newProblem,
      error: null,
    });
  } catch (error) {
    return next(new InternalServerError(error));
  }
}

async function updateProblem(req, res) {
  try {
    const updatedProblem = await problemService.updateProblem(req.params.id,req.body);
    return res.status(201).json({
      error:null,
      success:true,
      data:updatedProblem,
      message:"problem updated successfully",
    })
  } catch (error) {
    return next(new InternalServerError(error));
  }
}

async function deleteProblem(req, res) {
  try {
     await problemService.deleteProblem(req.params.id);
    return res.status(201).json({
      error:null,
      success:true,
      data:true,
      message:"problem deleted successfully",
    })
  } catch (error) {
    return next(new InternalServerError(error));
  }
}

module.exports = {
  getProblems,
  getProblem,
  createProblem,
  updateProblem,
  deleteProblem
};
