const WebSocket = require("ws");

const ws = new WebSocket(
  "wss://public.backend.medisearch.io:443/ws/medichat/api"
);

function generateID() {
  var id = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 32; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return id;
}

conversation_id = generateID();

const userConversation = {
  event: "user_message",
  conversation: ["Is cancer transmissible?"],
  key: "3639af0a-8941-4d8a-b200-036e75b6063b",
  id: conversation_id,
  settings: {
    language: "English",
  },
};

// Prepare for receiving the request
ws.on("message", function incoming(data) {
  const strData = data.toString("utf8");
  const jsonData = JSON.parse(strData);

  if (jsonData.event === "articles") {
    console.log("Got articles");
  } else if (jsonData.event === "llm_response") {
    console.log("Got llm response");
  } else if (jsonData.event === "error") {
    console.log("Got error");
  }
  console.log(jsonData);
});

// WebSocket is open, time to send a request.
ws.on("open", function open() {
  ws.send(JSON.stringify(userConversation));
});
