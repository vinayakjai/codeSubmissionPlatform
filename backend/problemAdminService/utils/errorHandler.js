function errorHandler(err, req, res, next) {
  return res.status(err.statusCode).json({
    success: false,
    message: err.errMessage,
    error: err.errName,
    data:null,
    errReason: err.actualErrReason,
  });
}

module.exports = errorHandler;
