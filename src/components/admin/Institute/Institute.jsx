import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Institute.css";
import * as api from "../../../axios/axiosReq";
import Button from "@mui/material/Button";
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];
export const Institute = () => {

  

  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"));
  const isUser = user?.token ? true : false;
  if (!isUser) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }

  const [ins, setIns] = useState([]);


  useEffect(() => {
    let f = async () => {
      let res = await api.getIns();
      console.log(res.data);
      setIns(res.data);
    };
    f();
  }, []);



  return (
    <>
      <div className="container">
        <table>
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
          {ins?.map((val, key) => {
            return (
              <tr value={val.id}>
                <td>{val.institute_name}</td>
                <td
                  onClick={() => {
                    navigate(`/mod/${val.id}`)
                  }}
                >
                  Edit
                </td>
              </tr>
            );
          })}
        </table>
        <Button
          onClick={() => {
            navigate("/addinstitute");
          }}
        >
          Add
        </Button>
      </div>
    </>
  );
};
