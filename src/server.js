import app from "./v1/app.js";
import defaultConfig from "./v1/config/config.db.js";
const server = app.listen(defaultConfig.app, () => {
  console.log(`πππServer is on ${defaultConfig.app} πππ`);
});

process.on("SIGNIN", () => {
  server.close(() => console.log("Bye"));
});
