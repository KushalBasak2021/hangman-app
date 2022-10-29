import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div
      className={`notification ${showNotification ? "show-notification" : ""}`}
    >
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
