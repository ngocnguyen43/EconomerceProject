import mongoose from "mongoose";

const connection = `mongodb://localhost:27017:tipJS`;
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
      .then((_) => console.log("Connect Success"))
      .catch((_) => console.log("Connect Failed"));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instance = Database.getInstance();
export default instance;
