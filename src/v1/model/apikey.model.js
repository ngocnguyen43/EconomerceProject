"use strict";

import { Schema, model } from "mongoose";
const DOCUMENT_NAME = "apiKey";
const COLLECTION_NAME = "apiKeys";

const apiKeysSchema = new Schema(
  {
    key: {
      type: String,
      require: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    permissions: {
      type: [String],
      require: true,
      enum: ["0000", "1111", "2222"],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);
export default model(DOCUMENT_NAME, apiKeysSchema);
