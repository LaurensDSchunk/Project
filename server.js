const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', function(req, res) {
   res.sendFile(path.resolve('/app/index.html'));
   res.end();
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(3400, function() {
   console.log('listening on 3400');
});