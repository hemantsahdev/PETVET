import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Sage = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function generateID() {
    let id = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 32; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return id;
  }
  // const receiveBotResponse = () => {
  //   // Simulate a bot response
  //   setTimeout(() => {
  //     setMessages([...messages, { text: "Bot response", sender: "bot" }]);
  //   }, 1000); // Simulate a delay
  // };

  const handleMessageSubmit = () => {
    const userMessage = { text: inputMessage, sender: "user" };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear the input field
    setInputMessage("");

    const socket = new WebSocket(
      "wss://public.backend.medisearch.io:443/ws/medichat/api"
    );

    socket.onopen = () => {
      console.log("Connected to WebSocket server");

      const userConversation = {
        event: "user_message",
        conversation: [inputMessage],
        key: "3639af0a-8941-4d8a-b200-036e75b6063b",
        id: generateID(),
        settings: {
          language: "English",
        },
      };

      socket.send(JSON.stringify(userConversation));
    };

    socket.onmessage = (event) => {
      const jsonData = JSON.parse(event.data);

      if (jsonData.event === "articles") {
        console.log("Got articles");
        // Handle articles
      } else if (jsonData.event === "llm_response") {
        console.log("Got llm response");

        // Append LLM response to the last user message
        setMessages((prevMessages) => {
          const lastUserMessageIndex = prevMessages.findIndex(
            (message) => message.sender === "user"
          );

          if (lastUserMessageIndex !== -1) {
            const updatedMessages = [...prevMessages];
            updatedMessages[lastUserMessageIndex].llmResponse = jsonData.text;
            console.log(updatedMessages);
            return updatedMessages;
          } else {
            return prevMessages;
          }
        });
      } else if (jsonData.event === "error") {
        console.log("Got error");
        // Handle error
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  };

  return (
    <main className="h-full w-full py-8  ">
      <div className="flex flex-col items-center justify-between w-full h-full ">
        <div className="h-5/6 w-full border border-black flex flex-col px-36 ">
          {/* <div className="h-5/6 w-3/4 text-center flex flex-col items-center justify-start   text-gray-700 ">
          <h1 className="mt-12">
            <span className="text-8xl font-bold bg-gradient-to-r from-blue-900 via-pink-800 to-blue-600 bg-clip-text text-transparent">
              Sage,
            </span>{" "}
           <span className="text-4xl font-semibold italic">  Pawsitively here for your pet needs. </span> 
          </h1>
            </div> */}

          {messages.map((message, index) => (
            <div
              key={`${message.sender}-${index}`}
              className={`flex justify-${
                message.sender === "user" ? "end" : "start"
              } mb-4`}
            >
              <div
                className={`rounded-lg py-2 px-4 ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black"
                }`}
              >
                <p className="break-words">{message.text}</p>
                {message.llmResponse && (
                  <p className="text-sm italic break-words">
                    {message.llmResponse}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="h-1/6 w-2/3 py-4 flex flex-row itmes-center justify-center gap-4">
          <input
            type="text"
            className="bg-creamContrast w-5/6 h-full border border-black rounded-3xl pl-4 text-xl font-semibold"
            placeholder="Enter your prompt here!"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            type="submit"
            className="border border-white px-6 rounded-full hover:bg-primaryBlue flex flex-row items-center justify-center"
            onClick={handleMessageSubmit}
          >
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Sage;
