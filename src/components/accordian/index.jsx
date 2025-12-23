import React, { useState } from "react";
import { data } from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [multiSelection, setMultiSlection] = useState(false);
  const [showMultipleAnswer, setShowMultipleAnswer] = useState([]);

  const expandAnswer = (id) => {
    setSelected(id === selected ? null : id);
  };

  const expandMultipeAnswers = (id) => {
    let copy = [...showMultipleAnswer];

    const isIndexAvailable = showMultipleAnswer.indexOf(id);
    console.log("isIndexAvailable", isIndexAvailable);
    if (isIndexAvailable === -1) {
      copy.push(id);
    } else {
      copy.splice(isIndexAvailable, 1);
    }
    setShowMultipleAnswer(copy);
  };
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSlection(!multiSelection)}>
        Enable Multiselection
      </button>
      <div className="accordian">
        {data && data?.length > 0 ? (
          data?.map((item) => (
            <div className="item">
              <div
                onClick={() =>
                  !!multiSelection
                    ? expandMultipeAnswers(item?.id)
                    : expandAnswer(item?.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {!multiSelection
                ? selected === item?.id && (
                    <div>
                      <div className="content">{item.Answer}</div>
                    </div>
                  )
                : showMultipleAnswer?.includes(item?.id) && (
                    <div key={item?.id} className="content">
                      {item.Answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
};

export default Accordian;
