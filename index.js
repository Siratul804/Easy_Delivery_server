const express = require("express");
const app = express();
const port = 8000;

const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

//socket

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "https://easy-delivery-client.onrender.com",
      "https://easy-delivery-admin.onrender.com",
    ],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("someone has connected !");

  socket.on("send_oder", (data) => {
    socket.broadcast.emit("receive_oder", data);
  });

  socket.on("disconnect", () => {
    console.log("someone has disconnect");
  });
});

//Middwares

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/uploads", express.static("uploads"));

app.use(cors());
//environment variable or you can say consstants
env.config();

//routes

// app.use("/api", require("./routes/test"));
app.use("/api", require("./routes/review"));
app.use("/api", require("./routes/admin"));
app.use("/api", require("./routes/food"));
app.use("/api", require("./routes/oder"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//mongodb conneciton

//mongodb+srv://easydelivery:<password>@easydelivery.ihoacgw.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://easydelivery:${process.env.USER_PASS}@easydelivery.ihoacgw.mongodb.net/${process.env.USER_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected easy-delivery ! ");
  });

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
