// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import { useParams } from "react-router-dom";
// import "../public/css/adform.css";
// import { FaUser } from "react-icons/fa";
// import "../public/css/content.css";

// const { id } = useParams()
// const url1 = `http://localhost:8080/home/dashboard/getDashboard/${id}`;
// const [dashboard, setDashboard] = useState(null);
// let content = [];

// useEffect(() => {
//     Axios.get(url1).then((res) => {
//         setDashboard(res.data);
//     });
// }, [url1]);

// if (dashboard) {
//     content = (
//         <div className="format-css">
//             <div>
//                 <h1>{item.name.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</h1>
//             </div>
//             <div>
//                 <div>{item.theory.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</div>
//             </div>
//             <div>
//                 <h4>Declare</h4>
//                 <div>{item.declare.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</div>
//             </div>
//             <div>
//                 <h4>Example</h4>
//                 <div>{item.example.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</div>
//             </div>
//             <hr className="line"></hr>
//             <br></br>
//         </div>
//     );
// }

// function Content() {
//     return (
//         <>
//             <div className="content">
//                 Hello
//             </div>
//         </>
//     );
// }

// export default Content;