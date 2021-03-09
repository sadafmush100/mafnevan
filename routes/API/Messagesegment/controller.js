const MessageRepo = require('../../../models/repositories/messagesegment.repository');
module.exports.CreateMessageSegments  =   async   (req,   res)    =>  {
    try{
        console.log("This is my sent",req.body);
        
        let payload =   {
            name:req.body.name,
            comments:req.body.comments
        }

        // await MessageRepo.CreateMessageInfo(payload).then(result=>{

        //     res.send({
        //         code: 1,
        //         message: "Successfully For Now",
        //         payload: result
        //     })
        // }).catch(errors=>{
        //     res.send({
        //         code: 3,
        //         message: "Found an error",
        //         payload: errors
        //     })
        let ResponseOBJ={};
        let SaveMessageSegments = MessageRepo.CreateMessageInfo(payload);
        if(SaveMessageSegments){
            ResponseOBJ= {
                code: 1,
                message: "Successfully For Now",
                payload: SaveMessageSegments
            }
        }else{
            ResponseOBJ= {
                code: 3,
                message: "Found an error",
                payload: "Sorry"
            }
        }
        res.send(ResponseOBJ)
      }catch(error){
            res.send({
                code: 3,
                message: "Error",
                payload: error.message
            })
        }
    }
module.exports.FetchMessageSegments  =   async   (req,   res)    =>  {
       try{
            console.log("this is my fetched",req.body)
            await MessageRepo.FetchMessageInfo().then(result=>{
                res.send({
                    code: 1,
                    message: "Successfully For Now",
                    payload: result
                })
             }).catch(errors=>{
                res.send({
                    code: 2,
                    message: "Found an error",
                    payload: errors
                })
            }) 
        }catch(error){
            res.send({
                code: 3,
                message: "Error",
                payload: error.message
            })
    }
    }
    module.exports.UpdateMessageSegments    =   async   (req,   res)    =>  {
        try{
            console.log("This is my edited",req.body);
            let payload = {
                _id:req.body._id,
                name:req.body.name,
                comments:req.body.comments
            }
            await MessageRepo.updateMessageInfo(req.body._id).then(result=>{
    
                res.send({
                    code: 1,
                    message: "Successfully For Now",
                    payload: result
                })
            }).catch(errors=>{
                res.send({
                    code: 3,
                    message: "Found an error",
                    payload: errors
                })
            })
            
        }catch(error){
                res.send({
                    code: 3,
                    message: "Error",
                    payload: error.message
                })
        }
    }
module.exports.DeleteMessageSegment=async (req,res)=>{
    try{
        console.log("this is my deleted",req.body.commentId)
        let payload={
           name:req.body.payload,
           comments:req.body.comments
        // _id:req.body._id
        }
        await MessageRepo.deleteMessageInfo(req.body.commentId).then(result=>{
            res.send({
                code: 1,
                message: "Successfully For Now",
                payload: result
            })
         }).catch(errors=>{
            res.send({
                code: 2,
                message: "Found an error",
                payload: errors
            })
        }) 
    }catch(error){
        res.send({
            code: 3,
            message: "Error",
            payload: error.message
        })
}
}