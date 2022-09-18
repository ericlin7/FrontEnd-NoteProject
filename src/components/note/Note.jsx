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
    axios
        .post("http://127.0.0.1:5000/createQuestion", {
          note: message
        })
        .then((res) => {
          console.log(res.data)
        })
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
