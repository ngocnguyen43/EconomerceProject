import mongoose from "mongoose";

const address = ``;
mongoose.connect(address).then().catch();
if (1 === 2) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

export default mongoose;
