import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import MainChat from "./MainChat";
import botImage from "../../Assets/bot.png";
import classes from "./Chat2.module.css";
import "./Chat.css";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_API_DEV_BASE_URL;
} else {
  baseUrl = process.env.REACT_APP_API_PROD_BASE_URL;
}

const Chat = () => {
  const [messages, setMessages] = useState([]);
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
  }, [socket, sessionId]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    if (!message || message.trim().length === 0) {
      return;
    }

    const data = {
      message,
      user: {
        username: user.lastName + " " + user.firstName,
        profileImage: user?.profilePicture,
      },
    };
    socket.current.emit("chatMessage", data);
    focusInput.current.focus();
    return setMessage(" ");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="chat-container mt-5">
            <div className="chat-box">
              <ScrollToBottom className={classes.chatBoxTop}>
                {messages.map((message) => {
                  return (
                    <MainChat
                      id={Math.floor(Math.random() * 100000 + "abc")}
                      sender={message.sender}
                      userImage={message.profilePicture || botImage}
                      message={message.message}
                      own={
                        message.sender === user.lastName + " " + user.firstName
                      }
                    />
                  );
                })}
              </ScrollToBottom>
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                ref={focusInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type your message..."
              />
              <button type="submit" onClick={sendMessageHandler}>
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Chat;
