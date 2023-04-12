import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "../public/css/adform.css";
export default function GetDashboard() {
  const url = `http://localhost:8080/home/dashboard/getAll`;
  const [dashboard, setDashboard] = useState(null);
  let content = [];

  useEffect(() => {
    Axios.get(url).then((res) => {
      setDashboard(res.data);
    });
  }, [url]);
  
  if (dashboard) {
    content = (
      <div className="data">
        {dashboard.data.map((item) => {
          return (
            <div>
              <div>
                <h4>ID</h4>
                <span>{item.id}</span>
              </div>
              <div>
                <h4>Name</h4>
                <span>{item.name}</span>
              </div>
              <div>
                <h4>Theory</h4>
                  <div>{item.theory.replaceAll('\\n', '\n').replaceAll('\\t', '       ')}</div>
              </div>
              <div>
                <h4>Declare</h4>
                <span>{item.declare.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</span>
              </div>
              <div>
              <h4>Example</h4>
                <span>{item.example.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</span>
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