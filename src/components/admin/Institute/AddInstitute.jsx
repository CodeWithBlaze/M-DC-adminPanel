import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../../axios/axiosReq";
import { Home } from "../Home/Home";
export const AddInstitute = () => {
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

  const [institute, setInstitute] = useState("");
  const createInstitute = async () => {
    // api call to create institute
    let res = await api.createInstitute({ institute_name: institute });
    console.log(res);
    if (res.data.institute_name) {
      alert("Institute added");
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
    <div className="container" id="add-cont">
      <TextField
        style={{ marginTop: "2rem", width: "30%" }}
        id="outlined-basic"
        label="Enter institute name"
        variant="outlined"
        onChange={(e) => {
          setInstitute(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          createInstitute();
        }}
        style={{ marginTop: "2rem", width: "10%", border: "1px solid" }}
      >
        Create
      </Button>
      <Button
        onClick={() => {
          navigate("/");
        }}
        style={{
          marginTop: "2rem",
          width: "10%",
          border: "1px solid green",
          color: "green",
        }}
      >
        Back
      </Button>
    </div>
    </>
  );
};
