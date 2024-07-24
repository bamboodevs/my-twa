import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PriInvitationLink.css";

const InvitationLink = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (e) => {
    const textToCopy = e.target.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch((err) => {
        console.error("Copy was failed : ", err);
      });
  };

  return (
    <div className="container mt-3">
      <strong onClick={handleCopy} style={{ cursor: "pointer" }}>
        https://t.me/BotName/start?r=xxxxxxxx
      </strong>

      {showToast && (
        <div
          className="toast show position-fixed top-0  mt-4 toast-custom"
          role="alert"
          aria-live="assertive"
          aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Message</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowToast(false)}></button>
          </div>
          <div className="toast-body">Copied!</div>
        </div>
      )}
    </div>
  );
};

export default InvitationLink;
