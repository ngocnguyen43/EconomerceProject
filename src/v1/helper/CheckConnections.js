"use strict";
import mongoose from "mongoose";
import os from "os";

export const countConnections = () => {
  const connections = mongoose.connections.length;
  console.log(`Database Connections: ${connections}`);
};
// export const
