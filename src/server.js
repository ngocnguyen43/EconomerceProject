import app from "./v1/app.js";
import defaultConfig from "./v1/config/config.db.js";
const server = app.listen(defaultConfig.app, () => {
  console.log(`🚀🚀🚀Server is on ${defaultConfig.app}`);
});

process.on("SIGNIN", () => {
  server.close(() => console.log("Bye"));
});
