const BaseError = require("./baseError");

class NotFound extends BaseError{
    
    constructor(actualErrReason){
       
        super(404,'Not Found','requested resource is not found');
        this.actualErrReason=actualErrReason;
    }
}
module.exports=NotFound;
