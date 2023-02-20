import React, { useEffect,useState } from 'react'
import DropDown from './DropDown';
import BasicModal from "./Modal"
import * as api from "../../../axios/axiosReq";
import "./tutor.css"
export const Tutor = () => {

  const [tut,setTut]=useState([])
    
  useEffect(() => {
    let f = async () => {
      let res = await api.getTutor();
      console.log(res.data);
      setTut(res.data);
    };
    f();
    
  }, []);

  
  return (
  <div className="container">    
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Details</th>
      </tr>
      {tut?.map((val, key) => {
            return (
              <tr key={val.id}>
                <td>{val.full_name}</td>
                <td>{val.email}</td>
                <td>
                  <DropDown val={val}/>
                </td>
                <td><BasicModal val={val}/></td>
              </tr>
            );
          })}
    </table>
  </div>
  )
}
