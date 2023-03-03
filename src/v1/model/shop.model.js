import { mongoose, model, Schema, Types } from "mongoose";

const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";

var shopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    password: {
      type: String,
      required: true,
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false,
    },
    roles: {
      type: Array,
      default: [],
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

//Export the model
export default model(DOCUMENT_NAME, shopSchema);
