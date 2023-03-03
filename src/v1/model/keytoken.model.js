"use strict";
import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "Key";
const COLLECTION_NAME = "Keys";
var keytokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Shop",
    },
    publicKey: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: Schema.Types.Array,
      default: [],
    },
  },
  {
    colletion: COLLECTION_NAME,
    timestamps: true,
  }
);

export default model(DOCUMENT_NAME, keytokenSchema);
