import React, { useState } from 'react';
import axios from "axios"
import "./Note.css";

const Note = () => {

  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log(message);
  };

  return (
    <div className="container note_container">
      <form>
        <textarea
          name="message"
          rows="30"
          placeholder="Place your Notes!"
          required
          value={message}
          onChange={handleSubmit}
        ></textarea>
        <br />
        <button onClick={handleClick} className="button">
          Generate Question
        </button>
      </form>
    </div>
  );
};

export default Note;
