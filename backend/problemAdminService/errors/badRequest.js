const BaseError = require("./baseError");

class BadRequest extends BaseError {
  constructor(actualErrReason) {
    super(400, "Bad Request", "invalid data got from client");
    this.actualErrReason = actualErrReason;
  }
}
module.exports = BadRequest;
