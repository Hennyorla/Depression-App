import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import "./Chat.css";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_API_DEV_BASE_URL;
} else {
  baseUrl = process.env.REACT_APP_API_PROD_BASE_URL;
}

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const focusInput = useRef();
  const params = useParams();

  const { user } = useSelector((state) => state.userState);

  const socket = useRef(io(baseUrl));

  const { sessionId } = params;

  useEffect(() => {
    if (sessionId === "chat-ai") {
      socket?.current.emit("joinRoom", {
        userData: {
          username: user.lastName + " " + user.firstName,
          profileImage: user?.profilePicture,
        },
        room: user.lastName + " " + user.firstName,
      });

      socket?.current.on("message", (msg) => {
        setMessages((prev) => [...prev, msg]);
      });
    } else {
      socket?.current.emit("joinRoom", {
        userData: {
          username: user.lastName + " " + user.firstName,
          profileImage: user?.profilePicture,
        },
        room: sessionId,
      });

      socket?.current.on("message", (msg) => {
        setMessages((prev) => [...prev, msg]);
      });
    }
  }, [socket]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="chat-container mt-5">
            <div className="chat-box">
              {messages.map((message, index) => (
                <div key={index} className={`chat-message ${message.sender}`}>
                  {message.message}
                </div>
              ))}
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button>Send</button>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Chat;
