import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import * as api from "../../../axios/axiosReq";
import { Home } from "../Home/Home";
export const AddMod = () => {
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

  const [modname, setModName] = useState("");
  const [modemail, setModEmail] = useState("");

  let id = useParams().id;

  const createMod = async () => {
    // api call to create mod

    let res = await api.createParticipant({
      name: modname,
      email: modemail,
      role: "moderator",
      institute_id: id,
    });

    if (res.data.email) {
      alert("Moderator added");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <>
      { isUser ? <Home/> : ""}
      <div className="container">
        <TextField
          style={{ marginTop: "2rem", width: "30%" }}
          id="outlined-basic"
          label="Enter Mod name"
          variant="outlined"
          onChange={(e) => {
            setModName(e.target.value);
          }}
        />
        <TextField
          style={{ marginTop: "2rem", width: "30%" }}
          id="outlined-basic"
          label="Enter Mod email"
          variant="outlined"
          onChange={(e) => {
            setModEmail(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            createMod();
          }}
          style={{ marginTop: "2rem", width: "10%", border: "1px solid" }}
        >
          Create
        </Button>
      </div>
    </>
  );
};
