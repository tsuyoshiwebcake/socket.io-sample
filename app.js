var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

// HTTP サーバのポートを指定する
app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  // クライアントへデータ送信
  // emit を使うとイベント名を指定できる
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    // クライアントから受け取ったデータを出力する
    console.log(data);
  });
});
