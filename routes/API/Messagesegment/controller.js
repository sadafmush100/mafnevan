const MessageRepo = require('../../../models/repositories/messagesegment.repository');
// const UserSettingRepository =   require('../../../models/repositories/settings.repository');
// const AutoResponderRepo =   require('../../../models/repositories/autoresponder.repository');


module.exports.MessageCreate  =   async   (req,   res)    =>  {
    try{
        console.log("This is my sent",req.body);
        let getMessageInfo = await MessageRepo.CreateMessageInfo(req.body.user_id);
        if(getMessageInfo._id){
            let Messageinfo= {
              user_id: getMessageInfo._id,
                name: req.body.name,
                comments:req.body.comments

              };
 };
            
            }
    
        }
    
module.exports.AutoResponderList =  async   (req,   res)    =>  {
    try{
        console.log("This is my sent",req.body.user_id);
        let getUserInfo = await UsersRepo.GetUserById(req.body.user_id);
        if(getUserInfo._id){
            let getUserSettings= await UserSettingRepository.GetUserSettingById(getUserInfo._id);
            let AutoResponderDetails= await AutoResponderRepo.GetAutoResponderResponder(getUserInfo._id);
            if(getUserSettings){
                let AutoResponderDetails= await AutoResponderRepo.GetAutoResponderResponder(getUserInfo._id);
                console.log(AutoResponderDetails);
                res.send({
                            code: 1,
                            message: "Successfull",
                            payload:{setting:getUserSettings.autoresponder,autokey:AutoResponderDetails}
                        });
            }else{
                res.send({
                    code: 1,
                    message: "Successfull",
                    payload:0
                });
            }
            
        }else{
            res.send({
                code: 4,
                message: "Sorry No Data Of Parent",
                payload: ""
            })
        }
        
    }catch(error){
        res.send({
            code: 3,
            message: "Error",
            payload: error.message
        })
    }
}
module.exports.AutoResponderEdit    =   async   (req,   res)    =>  {
    try{
        console.log("This is my sent",req.body);
        let AutoResponderDetails= await AutoResponderRepo.GetAutoResponderResponderWithId(req.body.Id);
        if(AutoResponderDetails){
            res.send({
                code: 1,
                message: "Successfull",
                payload:AutoResponderDetails
            }); 
        }else{
            res.send({
                code: 4,
                message: "Sorry No Data Of Parent",
                payload: ""
            })
        }
        
    }catch(error){
        res.send({
            code: 3,
            message: "Error",
            payload: error.message
        })
    }
}
module.exports.MessageUpdate  =   async   (req,   res)    =>  {
    try{
        console.log("This is my sent",req.body);
        let MessageDetails= await MessageRepo.updateMessageInfo(req.body.message_id);
        let getMessageInfo = await UsersRepo.GetUserById(req.body.user_id);
        if(MessageDetails){
            let MsgInfo= {
               name:req.body.name,
               comments:req.body.comments
              };
              let updateAutoResponder=await AutoResponderRepo.updateAutoResponderById(UsersAutoResponderinfo,req.body.auto_responder_id);
              let DeleteAssociatedKeywords=await AutoResponderRepo.DeleteAssociatedAutoResponderKeywords(req.body.auto_responder_id,getUserInfo._id);
              let strArr = req.body.auto_responder_keywords.split(',');
              
              res.send({
                code: 1,
                message: "Successfull",
                payload:updateAutoResponder
            });
        }
}catch(error){
        res.send({
            code: 3,
            message: "Error",
            payload: error.message
        })
    }
}