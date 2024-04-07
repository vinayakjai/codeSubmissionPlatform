const BaseError = require("./baseError");

class InternalServerError extends BaseError{
       constructor(actualErrReasoN){
           super(500,'INTERNAL SERVER ERROR','SOME INTERNAL ISSUE IN SERVER');
           this.actualErrReason=actualErrReason;
           
       } 
}
module.exports=InternalServerError