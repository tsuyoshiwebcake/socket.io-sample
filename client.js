// Client API を読み込む
var io = require('socket.io-client');

// 通信先のサーバを指定する
var socket = io('http://localhost');
socket.on('news', function (data) {
  // サーバから受け取ったデータを出力する
  console.log(data);

  // サーバへデータ送信
  // emit を使うとイベント名を指定できる
  socket.emit('my other event', { my: 'data' });

  // 通信を切断し、プロセスを終了する
  socket.disconnect();
  process.exit(0);
});
