const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

const port = process.env.PORT || 1337;



app.get('/', function(req, res) {
   res.sendFile(path.resolve(__dirname, "../app/dist/index.html"));
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(port, function() {
 console.log('listening on port 1337');
});