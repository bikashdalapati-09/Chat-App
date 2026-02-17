import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    let getConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!getConversation) {
      getConversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      getConversation.messages.push(newMessage._id);
    }

    await getConversation.save();

    return res.status(200).json({
      message: newMessage,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error sending message",
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate({
      path: "messages",
      populate: {
        path: "senderId",
        select: "_id",
      },
    });

    console.log(conversation);
    return res.status(200).json({
      messages: conversation?.messages || [],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error fetching messages",
    });
  }
};
