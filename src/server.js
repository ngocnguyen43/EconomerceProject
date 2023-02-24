import app from "./v1/app.js";

const server = app.listen(3000, () => {
  console.log(`🚀🚀🚀Server is on 3000`);
});

process.on("SIGNIN", () => {
  server.close(() => console.log("Bye"));
});
