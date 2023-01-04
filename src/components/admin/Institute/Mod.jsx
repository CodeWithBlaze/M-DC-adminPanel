import { useNavigate, useParams } from "react-router-dom";
import * as api from "../../../axios/axiosReq";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
export const Mod = () => {

  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"));
  const isUser = user?.token ? true : false;
  if (!isUser) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }

  let institute_id = useParams().id;

  const [mods, setMods] = useState([]);

  useEffect(() => {
    let f = async () => {
      let res = await api.getMods(institute_id);
      setMods(res.data);
    };
    f();
  }, []);
  return (
    <>
      <div className="container">
        <table>
          <tr>
            <th>Name</th>
          </tr>
          {mods?.map((val, key) => {
            return (
              <tr value={val.id}>
                <td>{val.name}</td>
              </tr>
            );
          })}
        </table>
        <Button
          onClick={() => {
               navigate(`/addmod/${institute_id}`)
          }}
        >
          Add new mod
        </Button>
        <Button
          onClick={() => {
               navigate(`/viewclasses/${institute_id}`)
          }}
        >
          View classes
        </Button>
      </div>
    </>
  );
};
