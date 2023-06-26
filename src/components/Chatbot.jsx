import React from "react";
import { Link } from "react-router-dom";
import "./Chatbot.css";
import ChatbotIcon from "../assets/images/Chatbot.gif";

const Chatbot = () => {
  return (
    <>
      <div className="dropdown e-caret-hide">
        <Link
          type="button"
          className="btn chat-bot"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          <i className="chat-bot fa-solid fa-robot"></i>
        </Link>

        <form className="dropdown-menu chatBox p-4">
          <div className="text-center">
            <img src={ChatbotIcon} alt="chatbot" className="chatbotImg" />
            <h5>Our team is Offline at this time!</h5>
            <hr />
          </div>

          <textarea
            className="textContainer form-control"
            placeholder="Chat's goes here"
          ></textarea>

          <div className="mb-2  chatbot-input-text">
            <div className="row">
              <Link className="col-1 icons" href="#">
                <i className="fa-solid fa-paperclip pt-2 px-1"></i>
              </Link>

              <Link className="col-1 icons" href="#">
                <i className="fa-regular fa-face-smile pt-2 px-1"></i>
              </Link>

              <Link className="col-1 icons" href="#">
                <i className="fa-solid fa-microphone pt-2 px-1"></i>
              </Link>

              <input
                type="text"
                className="chatbot-input form-control mx-auto col"
                placeholder="Leave a message"
              />

              <Link className="col-1 icons" href="#">
                <i className="fa-solid fa-circle-arrow-right pt-2 mx-1"></i>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
