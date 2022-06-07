import React from "react";

export default function Message({ type = "error", text = "error" }) {
  let addClass = "";
  if (type == "error") addClass += " message--error";
  if (type == "success") addClass += " message--success";
  if (type == "info") addClass += " message--info";

  return (
    <div className="message__outer">
      <div className={`message ${addClass}`}>{text}</div>
    </div>
  );
}
