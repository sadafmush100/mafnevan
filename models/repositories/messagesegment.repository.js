const mongoose = require('mongoose');
const MessageSeg = require('../models/messagesegment.model');
const MessageRepository = {
  /**
   * @GetMessageId
   * Get user As Per user_id  and Facebook ID
   */
  //  GetMessageId: async (UserId,MessageId) => {
  //     try {
  //       let MessageInfo = await MessaageSeg.findOne({ 'user_id': mongoose.Types.ObjectId(UserId),'message_id': MessageId}).exec();
  //       return MessageInfo;
  //     } catch (e) {
  //       throw e;
  //     }
  //   },

  /**
   * @CreateMessageInfo
   * Get Friends As Per user_id
   */
  /** 
   * @FetchMessageInfo
   */
  FetchMessageInfo: async (data) => {
    try {
      let MessageInfo = await MessageSeg.find(data)
      return MessageInfo;
    } catch (e) {
      throw e;
    }
  },
  CreateMessageInfo: async (data) => {
    try {
      let MessageDetails = await MessageSeg.create(data);
      return MessageDetails;
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
        '_id':mongoose.Types.ObjectId(id),

        new: true,
        upsert: true
      }).exec();
      return updateMessage;
    } catch (e) {
      throw e;
    }
  },
  deleteMessageInfo: async (id) => {
    try {
      let deleteMessage = await MessageSeg.deleteOne({
        '_id': mongoose.Types.ObjectId(id)
      }).exec();
      console.log("id-backend", _id)
      return deleteMessage;
    } catch (e) {
      throw e;
    }
  },
}
module.exports = MessageRepository;