import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../public/css/adform.css";
export default function GetDashboard() {
  const url = `http://localhost:8080/home/exercise/getAll`;
  const [exercise, setExercise] = useState(null);
  let content = [];

  useEffect(() => {
    Axios.get(url).then((res) => {
      setExercise(res.data);
    });
  }, [url]);

  if (exercise) {
    content = (
      <div className="data">
        {exercise.data.map((item) => {
          return (
            <div>
              <div>
                <h4>ID</h4>
                <span>{item.id}</span>
              </div>
              <div>
                <h4>Name</h4>
                <span>
                  {item.question.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </span>
              </div>
              <div>
                <h4>Theory</h4>
                <span>
                  {item.answer.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </span>
              </div>
              <hr className="line"></hr>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>{content}</div>;
}