const Chat = require("../model/chatSchema");
const main = require("./ChatBotApi");

async function chats(req, res) {
  try {

    const { id, msg } = req.body;

    const findUser = await Chat.findOne({ userId: id });

    const user =
      findUser === null
        ? await Chat.create({ userId: id, chats: [] })
        : findUser;

    const promtMassage = [
      ...user.chats,
      {
        role: "user",
        parts: [{ text: msg }],
      },
    ];

    const answer = await main(promtMassage);

    await Chat.updateOne(
      { userId: id },
      {
        $push: {
          chats: {
            $each: [
              { role: "user", parts: [{ text: msg }] },
              { role: "model", parts: [{ text: answer }] },
            ],
          },
        },
      }
    );

    res.send({ answer });
  } catch (error) {
    console.error("Error occurred while processing chat:", error);
  }
}

module.exports = chats;
