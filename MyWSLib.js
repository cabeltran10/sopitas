const WebSocket = require("ws");

const MyWSLib = function() {
  const MyWSLib = this || {};
  const clients = [];

  MyWSLib.setupWS = server => {
    const wss = new WebSocket.Server({ server });

    console.log("Setting up socket");

    wss.on("connection", ws => {
      console.log("accepting connection", ws);
      clients.push(ws);
    });
    //En caso de que el cliente se vaya deben cerrar el socket.
  };

  MyWSLib.notifyAll = data => {
    for (let ws of clients) {
      ws.send(data);
    }
  };

  return MyWSLib;
};

module.exports = MyWSLib;
