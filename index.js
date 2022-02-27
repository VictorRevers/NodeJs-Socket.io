var express = require("express");
const { Http2ServerRequest } = require("http2");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);


io.on("connection", (socket)=>{
    console.log(socket);
    console.log(socket.id);
})

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index");
});



http.listen(3000, () =>{
    console.log("app rodando!");
});

