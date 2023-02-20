import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Participant.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as api from "../../../axios/axiosReq";
import { Home } from "../Home/Home";
export const Participant = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"));
  const isUser = user?.token ? true : false;
  if (!isUser) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }
  const [participant, setParticipant] = useState("");
  const [pName, setPName] = useState("");
  const [pEmail, setPEmail] = useState("");

  let id = useParams().id;
  let cid = useParams().cid; // class id

  const createParticipant = async () => {
    let res = await api.createParticipant({
      name: pName,
      email: pEmail,
      role: participant,
      institute_id: id,
      class_id: cid,
    });
    console.log(res.data);
    if (res.data.email) {
      alert(`${participant} added`);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
    { isUser ? <Home/> : ""}
      <div className="container">
        {user.role == "teacher" ? (
          <FormControl style={{ width: "30%", marginTop: "2rem" }}>
            <InputLabel id="demo-simple-select-label">Add</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={participant}
              label="Add "
              onChange={(e) => {
                setParticipant(e.target.value);
              }}
            >
              <MenuItem value={"student"}>Student</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <FormControl style={{ width: "30%", marginTop: "2rem" }}>
            <InputLabel id="demo-simple-select-label">Add</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={participant}
              label="Add "
              onChange={(e) => {
                setParticipant(e.target.value);
              }}
            >
              <MenuItem value={"student"}>Student</MenuItem>
              <MenuItem value={"Teacher"}>Teacher</MenuItem>
            </Select>
          </FormControl>
        )}

        <TextField
          style={{ marginTop: "2rem", width: "30%" }}
          id="outlined-basic"
          label="Enter Participant name"
          variant="outlined"
          onChange={(e) => {
            setPName(e.target.value);
          }}
        />
        <TextField
          style={{ marginTop: "2rem", width: "30%" }}
          id="outlined-basic"
          label="Enter Participant email"
          variant="outlined"
          onChange={(e) => {
            setPEmail(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            createParticipant();
          }}
          style={{ marginTop: "2rem", width: "10%", border: "1px solid" }}
        >
          Create
        </Button>
      </div>
    </>
  );
};
