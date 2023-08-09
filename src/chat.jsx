import React from "react";
import { ChatEngine } from "react-chat-engine";

const ChatApp = () => {
  let person = localStorage.getItem("name");
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="d42aab11-d0c9-4097-9868-0371ad82934f"
        userName="Lawyer"
        userSecret="Asrith@2003"
      />

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body">
          Hello, world! This is a toast message.
          <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm">
              Take action
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="toast"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
