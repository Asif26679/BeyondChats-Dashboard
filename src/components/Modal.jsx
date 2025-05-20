

import { useEffect, useRef, useState } from "react";
import { XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

function ChatModal({ isOpen, onClose, selectedChat }) {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (selectedChat) {
      const initial = selectedChat.messages || [
        {
          sender: "customer",
          text: selectedChat.lastMsg || "Hello!",
        },
        {
          sender: "you",
          text: "Hi! How can I assist you?",
        },
      ];
      setMessages(initial);
      generateAiSuggestion(initial);
    }
  }, [selectedChat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateAiSuggestion = (msgList) => {
    const lastCustomerMsg = msgList.reverse().find((m) => m.sender === "customer");
    if (!lastCustomerMsg) return;

    const text = lastCustomerMsg.text.toLowerCase();
    let suggestion = "Would you like to respond?";

    if (text.includes("payment")) {
      suggestion = "Ask for the payment reference ID and offer to check the transaction.";
    } else if (text.includes("product")) {
      suggestion = "Thank them for their interest and provide product details.";
    } else if (text.includes("issue")) {
      suggestion = "Apologize for the issue and ask for more info.";
    }

    setAiSuggestions([{ text: suggestion }]);
  };

  const handleSend = () => {
    if (!newMsg.trim()) return;
    setMessages((prev) => [...prev, { sender: "you", text: newMsg }]);
    setNewMsg("");
  };

  const handleUseSuggestion = (text) => {
    setNewMsg(text);
  };

  if (!isOpen || !selectedChat) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-6xl h-[90vh] flex relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Main Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center text-lg font-semibold text-white bg-blue-600">
            <span>Chat with {selectedChat.name}</span>
            <PhoneIcon className="h-5 w-5 text-white cursor-pointer hover:text-green-500" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg text-sm break-words ${
                    msg.sender === "you"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-900 border rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex gap-2 items-center">
            <input
              type="text"
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              placeholder="Type a message..."
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>

        {/* AI Chatbox */}
        <div className="w-[320px] md:w-[360px] border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex flex-col">
          <div className="p-4 border-b text-gray-700 dark:text-white font-bold text-lg">
            AI Assistant
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {aiSuggestions.map((sug, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-400 to-blue-500 text-white p-3 rounded-lg shadow text-sm relative"
              >
                <div className="text-xs mb-2 text-white opacity-80">Suggested reply</div>
                {sug.text}
                <button
                  onClick={() => handleUseSuggestion(sug.text)}
                  className="absolute bottom-1 right-2 text-xs underline cursor-pointer"
                >
                  Use
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatModal;

