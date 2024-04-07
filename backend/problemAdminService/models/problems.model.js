const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,'Title cannot be empty']
        },
        description:{
            type:String,
            required:[true,'Description cannot be empty'],
        },
        difficulty:{
            enum:['easy','medium','hard'],
            type:String,
            required:[true,'Difficulty cannot be empty'],
            default:'easy',
        },
        testCases:[
          {
            input:{
                type:String,
                required:true,
                
            },
            output:{
                type:String,
                required:true,
            }
          }
        ],
        editorial:{
            type:String,
            
        }
    }
);
const Problems=mongoose.model('Problem',problemSchema);





module.exports=Problems;
