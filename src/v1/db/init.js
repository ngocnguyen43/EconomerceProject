import mongoose from "mongoose";
import { countConnections } from "./../helper/CheckConnections.js";
import defaultConfig from ".././config/config.db.js";
const {
  db: { url, name, port },
} = defaultConfig;
const connection = `mongodb://${url}:${port}/${name}`;
//singleton
class Database {
  constructor() {
    this.connect();
  }
  connect() {
    if (true) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connection)
      .then((_) => {
        console.log("Connect Successfully ");
        countConnections();
      })
      .catch((_) => console.log("Connect Failed"));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
export default Database;
