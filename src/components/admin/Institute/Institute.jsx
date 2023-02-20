import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Institute.css";
import * as api from "../../../axios/axiosReq";
import Button from "@mui/material/Button";
import { Home } from "../Home/Home";
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];
export const Institute = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"));
  const isUser = user?.token ? true : false;
  const userRole = user?.role;
  if (!isUser) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  } else if (userRole == "moderator"||userRole == "teacher") {
    let institute_id = user?.institute_id;
    setTimeout(() => {
      navigate(`/viewclasses/${institute_id}`);
    }, 1000);
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

{ isUser ? <Home/> : ""}
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
                    navigate(`/mod/${val.id}`);
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
