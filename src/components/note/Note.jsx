import React from "react";
import "./Note.css";

const Note = () => {
  return (
    <div className="container note_container">
      <form>
        <textarea
          name="message"
          rows="30"
          placeholder="Place your Notes!"
          required
        >
        </textarea>
      </form>
    </div>
  );
};

export default Note;
