const BaseError = require("./baseError");

class DbError extends BaseError{
    constructor(errMessage,actualErrorReason){
        super(400,'db error',errMessage);
        this.actualErrorReason=actualErrorReason;
    }
}

module.exports=DbError;