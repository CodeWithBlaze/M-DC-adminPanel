import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../../../axios/axiosReq";

export const AddClass = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"));
  const isUser = user?.token ? true : false;
  if (!isUser) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }

  let institute_id = useParams().id;

  const [class_name, setClassName] = useState("");

  const createClass = async () => {
    let res = await api.addClass({ class_name, institute_id });
    if (res.data.class_name) {
      alert("class added");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <>
      <div className="container">
        <TextField
          style={{ marginTop: "2rem", width: "30%" }}
          id="outlined-basic"
          label="Enter Class Name"
          variant="outlined"
          onChange={(e) => {
            setClassName(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            createClass();
          }}
          style={{ marginTop: "2rem", width: "10%", border: "1px solid" }}
        >
          Create
        </Button>
      </div>
    </>
  );
};
