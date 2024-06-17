import React, { useState } from "react";
import "./MessagesContainer.css";

type messageContainerProp = {
  name: string;
  time: string;
  message: string;
  date: string;
  previousperson: boolean;
};

function MessagesContainer({
  name,
  time,
  message,
  date,
  previousperson,
}: messageContainerProp) {
  const [showDate, setShowDate] = useState(false);

  function setInitialsOfName(name: string): string {
    const wordsOfName = name.split(" ");
    const initials = wordsOfName[0][0] + wordsOfName[1][0];
    return initials.toUpperCase();
  }

  function nameChecker(name: string): string {
    if (name.length > 26) {
      return name.slice(0, 20) + "...";
    }
    return name;
  }

  return (
    <>
      {previousperson ? (
        <div className="message-container true">
          {showDate ? <div className="date"> {date}</div> : null}
          <div className="message-container-ionlist">
            <div className="message-container-ionitem">
              {previousperson ? (
                <div className="name-initials previoustrue">
                  <p> </p>
                </div>
              ) : (
                <div className="name-initials ">
                  <p>{setInitialsOfName(name)}</p>
                </div>
              )}
              <div className="actual-content">
                <div className="actual-content-credential">
                  {previousperson ? (
                    <div className="sender-name"> </div>
                  ) : (
                    <div className="sender-name">{name}</div>
                  )}
                  <div className="time-sent">{time}</div>
                </div>
                <div className="actual-content-message">{message}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="message-container">
          {showDate ? <div className="date"> {date}</div> : null}
          <div className="message-container-ionlist">
            <div className="message-container-ionitem">
              <div className="name-initials ">
                <p>{setInitialsOfName(name)}</p>
              </div>

              <div className="actual-content">
                <div className="actual-content-credential">
                  <div className="sender-name">{name}</div>

                  <div className="time-sent">{time}</div>
                </div>
                <div className="actual-content-message">{message}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MessagesContainer;
