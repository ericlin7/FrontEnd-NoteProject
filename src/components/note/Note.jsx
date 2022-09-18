import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Note.css";
import { Radio } from 'antd';

const Note = () => {
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(true);
  const [question, setQuestion] = useState("");
  const [value, setValue] = useState(1);

  const handleSubmit = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:5000/createQuestion", {
      note: message
    }).then((res) => {
      setQuestion(res.data);
      setPreview(false);
    })
  };

  const onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  if (preview) {
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
  } else {
    return (
        <div className="container note_container">
          <form>
            <div>
              <Radio.Group onChange={onRadioChange} value={value}>
                {Object.values(question.question.body).map((option, i) =>
                    <Radio value={i + 1} key={question.uuid + i}>{option}</Radio>)
                }

              </Radio.Group>
            </div>
          </form>
        </div>
    )
  }
};

export default Note;
