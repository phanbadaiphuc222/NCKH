import '../public/css/navbar.css';
import React, { useEffect, useState } from "react";
import { publicRequest } from "./getContent"; 

export default function SideBar() {

     const [dashboard, setDashboard] = useState(null);
     const [contents, setContents] = useState(null);
     let content = [];
     let result = null;

     useEffect(() => {
          const getSideBar = async () => {
              try {
                  const res = await publicRequest.get(`home/dashboard/getAll`)
                  setDashboard(res.data)
              } catch(err){
                  console.log(err)
              }
          }
      
          getSideBar()
        }, [])

     

     async function test(id) {
          try {
               const res = await publicRequest.get(`home/dashboard/getDashboard/${id}`)
               setContents(res.data)
           } catch(err){
               console.log(err)
           }
     }
     

     if (dashboard) {
          content = (
               <nav className="nav-menu">
                    <ul className="nav-menu-items">
                         
                         {dashboard.data.map((item) => {
                              console.log(typeof(item))
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

     if (contents) {
          console.log(contents); 
          result = (
               <div className="format-css">
                    <div>
              </div>
              <div>
                <h4>Name</h4>
                <div>{contents.data.name.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</div>
              </div>
              <div>
                <h4>Theory</h4>
                  <div>{contents.data.theory.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</div>
              </div>
              <div>
                <h4>Declare</h4>
                <div>{contents.data.declare.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</div>
              </div>
              <div>
              <h4>Example</h4>
                <div>{contents.data.example.replaceAll('\\n', '\n').replaceAll('\\t', '\t')}</div>
              </div>
              {/* <hr className="line"></hr> */}
               </div>
          )
     } else {
          result = (
               <div>Welcome to our course</div>
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