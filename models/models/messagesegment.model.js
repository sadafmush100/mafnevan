const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSegmentSchema=new Schema({
    name:{
       type:String ,
       required:true
    },
    comments:{
        type:String ,
        required:true
     }
})

module.exports=mongoose.model('messagesegment',MessageSegmentSchema)