class BaseError extends Error{


    constructor(statusCode,errName,errMessage){
      
          super(errMessage,{cause:errName});
          this.statusCode=statusCode;
          this.errName=errName;
          this.errMessage=errMessage;
        
    }
}

module.exports=BaseError;