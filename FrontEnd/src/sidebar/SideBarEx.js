import '../public/css/navbar.css';
import React, { useEffect, useState, useRef } from "react";
import { publicRequest } from "./getContent";
import TextField from "@material-ui/core/TextField";

export default function SideBar() {

     const [exercise, setExercise] = useState(null);
     const [contents, setContents] = useState(null);
     let content = [];
     let result = null;
     const [answer, setAnswer] = useState("");
     // const [input, setInput] = useState('')
     const input = "";
     const inputRef = useRef();

     useEffect(() => {
          const getSideBar = async () => {
               try {
                    const res = await publicRequest.get(`/home/exercise/getAll`)
                    setExercise(res.data)
               } catch (err) {
                    console.log(err)
               }
          }

          getSideBar()
     }, [])

     async function test(id) {
          try {
               const res = await publicRequest.get(`/home/exercise/getExercise/${id}`)
               setContents(res.data);
               setAnswer(res.data.data.answer);
               console.log(res.data.data.answer);
               console.log(answer);
          } catch (err) {
               console.log(err)
          }
     }

     if (exercise) {
          content = (
               <nav className="nav-menu">
                    <ul className="nav-menu-items">

                         {exercise.data.map((item) => {
                              return (

                                   <button className="button2" onClick={() => test(item.id)}>
                                        <span style={{ color: "#FFFFFF" }}>
                                             {item.name}
                                        </span>
                                   </button>
                              );
                         })}

                    </ul>
               </nav>
          )
     }

     function submit() {
          if (inputRef.current.value) {
               if (inputRef.current.value.trim() == answer) {
                    alert('Correct')
                    return 
               }
               alert('Incorrect')
               return
          }
     };

     if (contents) {
          
          result = (
               <div className="format-css">
                    <div>
                    </div>
                    <div>
                         <h2>{contents.data.name.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</h2>
                         <br></br>
                    </div>
                    <div className="question">
                         <h4 style={{color: "blue"}}>{contents.data.intro}</h4>
                         <h4>{contents.data.question.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</h4>
                    </div>
                    <div>
                         <div>
                              <span className="yourAnswer">Your answer:</span>
                              <input 
                                   type="Text" 
                                   className="textfield" 
                                   id="answer-input"
                                   ref={inputRef}
                                   // onChange={event => setInput(event.target.value)}
                                   // value="input"
                              />
                              <span className="sp-submit">
                                   <button 
                                        className="button"
                                        onClick={() => submit()}
                                   >Submit</button></span>
                         </div>
                    </div>
                    <hr className="line"></hr>
               </div>
          )
     } else {
          result = (
               <div>Welcome to our page</div>
          )
     }

     return (
          <div>
               {content}
               <div className="content">
                    {result}
               </div>
          </div>
     );

}