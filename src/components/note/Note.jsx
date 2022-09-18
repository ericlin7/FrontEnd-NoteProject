import React from "react";
import "./Note.css";

const Note = () => {
  return (
    <div className="container note_container">
      <div className="note_options">
        <form>
          <textarea
            name="message"
            rows="30"
            placeholder="Place your Notes!"
            required
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Note;
