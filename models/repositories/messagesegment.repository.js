const mongoose = require('mongoose');
const MessageSeg = require('../models/messagesegment.model');
const MessageRepository   =   {
  /**
    * @GetMessageId
    * Get user As Per user_id  and Facebook ID
  */
 GetMessageId: async (UserId,MessageId) => {
    try {
      let MessageInfo = await MessaageSeg.findOne({ 'user_id': mongoose.Types.ObjectId(UserId),'message_id': MessageId}).exec();
      return MessageInfo;
    } catch (e) {
      throw e;
    }
  },
  
    /**
    * @CreateMessageInfo
    * Get Friends As Per user_id
  */
 CreateMessageInfo: async (data) => {
    try {
        let UserName = await MessageSeg.create(data);
      return UserName;
    } catch (e) {
      throw e;
    }
  },
/**
  * @updateMessageInfo
  * update FriendsInfo BY Id
*/
updateMessageInfo: async (data, id) => {
try {
  let updateMessage = await MessageSeg.findByIdAndUpdate(id, data, {
    new: true,
    upsert: true
  }).exec();
  return updateMessage;
} catch (e) {
  throw e;
}
},
}
module.exports = MessageRepository;