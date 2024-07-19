const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/chathelpers");
const messageFormat = require("./utils/messageFormat");
const runConversation = require("./utils/gpt");
const { profanityFilter } = require("./utils/profanityFilter");

const listen = async (io) => {
  const bot = "T-robotics";

  // Run when client connects
  io.on("connection", (socket) => {
    socket.on("joinRoom", async ({ userData, room }) => {
      const user = userJoin(socket.id, userData, room);
      socket.join(user.room);

      if (user.room === userData.username) {
        return socket.emit(
          "message",
          messageFormat(
            bot,
            `Ask general questions to get instant answers... vulgar words are not permitted`,
            undefined,
            "new-msg"
          )
        );
      } else {
        // Welcome current user
        socket.emit(
          "message",
          messageFormat(bot, `Welcome to moodlift life chat session`)
        );

        socket.broadcast
          .to(user.room)
          .emit(
            "message",
            messageFormat(bot, `${user?.userData.username} is online`)
          );
      }
    });

    // Listen for chatMessage
    socket.on("chatMessage", async (msg) => {
      const user = getCurrentUser(socket.id);

      io.to(user.room).emit(
        "message",
        messageFormat(
          user.userData.username,
          msg.message,
          user.userData.profileImage
        )
      );

      // profanity filter
      const isBad = await profanityFilter(msg.message);

      if (user.room === user.userData.username) {
        if (isBad) {
          return io
            .to(user.room)
            .emit(
              "message",
              messageFormat(
                bot.name,
                "Vulgar words are not permitted",
                undefined
              )
            );
        }

        const response = await runConversation(msg.message);
        if (response.error) {
          return io
            .to(user.room)
            .emit(
              "message",
              messageFormat(bot.name, response.error, undefined)
            );
        }
        // if (userQuestionCount.count == 0) {
        io.to(user.room).emit(
          "message",
          messageFormat(bot.name, response, undefined)
        );
      }
      // }
    });

    // Runs when client disconnects
    socket.on("leaveRoom", ({ userData, room }) => {
      const user = userLeave(userData.username);
      if (user) {
        socket.broadcast
          .to(room)
          .emit(
            "message",
            messageFormat(
              bot.name,
              `${userData.username} has left the chat`,
              undefined
            )
          );

        // Send users and room info
        io.to(room).emit("roomUsers", {
          room: user.room,
          users: getRoomUsers(room),
        });
      }
    });
  });
};

module.exports = { listen };
