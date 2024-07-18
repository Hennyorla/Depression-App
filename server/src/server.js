const http = require("http");
const cron = require("node-cron");
const { Server } = require("socket.io");
const app = require("./app");
const httpServer = http.createServer(app);
const dbconnect = require("./utils/dbConfig");
const { PORT } = require("./config/index");
const socketServer = require("./socketServer");
const { sessionReminder } = require("./services/sessionServices");
const { CLIENT_URL } = require("./config/index");
const io = new Server(httpServer, {
  cors: {
    origin: CLIENT_URL,
  },
});

// Schedule the sendBirthdayReminder function to run every day at 8:00 AM
cron.schedule(
  "*/30 * * * *",
  async () => {
    await sessionReminder();
  },
  {
    scheduled: true,
    timezone: "Africa/Lagos", // e.g., 'Central African Timezone'
  }
);

// start the server
const startServer = async () => {
  await dbconnect();

  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  socketServer.listen(io);
};

startServer();
