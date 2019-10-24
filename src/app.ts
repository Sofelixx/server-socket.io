import express from "express";
import socket from "socket.io";
import http from "http";
const app = express();
const server = http.createServer(app);
const io = socket(server)
io.on("connection", (socket) => {
  socket.emit("welcome", "Welcome to Socket.io");
});
export default server;
