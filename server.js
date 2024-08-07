const WebSocket = require("ws");

class WSS {
  static {
    this.wss = new WebSocket.Server({ port: 3000 });
  }

  static sendChat(text) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(text);
      }
    });
  }
}

module.exports = WSS;
