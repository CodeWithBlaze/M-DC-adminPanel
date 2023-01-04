import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../../../axios/axiosReq";

export const IndividualClass = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"));
  const isUser = user?.token ? true : false;
  if (!isUser) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }
  

  const [classDetails, setClassDetails] = useState([]);
  let institute_id = useParams().id;
  let class_id = useParams().cid;



  useEffect(() => {

     let getClassDetails = async ()=>{

        let res = await api.getClassParticipants(class_id)
        setClassDetails([...res.data.students,...res.data.teachers]);

     }

     getClassDetails()

  }, []);
  return (
    <>
      <div className="container">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
          {classDetails?.map((val, key) => {
            return (
              <tr value={val.id}>
                <td>{val.name}</td>
                <td
                >
                  {val.email}
                </td>
                <td
                >
                  {val.role}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};
