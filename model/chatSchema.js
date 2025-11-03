const  mongoose =require ("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
  userId: String,
    chats: [Object],
});

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;
