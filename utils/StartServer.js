const database = require("./database");

async function startServer(app) {
  try {
    await database();

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error occurred while starting the server:", error);
  }
}

module.exports = startServer;
