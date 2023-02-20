import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "../Home/Home";
import "./Class.css";
export const Class = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"))
  const isUser = user?.token ? true : false;
  if(!isUser){
    setTimeout(()=>{
      navigate("/login")
    },100)
    
  }
  const [institute, setInstitute] = useState("");
  const [institute_id, setInstituteID] = useState("");

  const handleInstitute = (e) => {
    if ((e.target.value = "Yes")) {
      setInstitute("Yes");
      setInstituteID("1");
      // api call to add class for the institute
    }
  };
  return (
    <>
      { isUser ? <Home/> : ""}
      <div className="container">
        {institute ? (
          <>
            <div className="c-container">
              <input type="text" onChange={(e) => {}} placeholder="Add class" />
              <button
                type="submit"
                onClick={() => {
                  navigate("/participant");
                }}
              >
                ADD
              </button>
            </div>
            <button
              className="back"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Home
            </button>
          </>
        ) : (
          <>
            <label for="add">Select Institute:</label>
            <select
              id="add"
              name="Add"
              onChange={(e) => {
                handleInstitute(e);
              }}
            >
              <option value="none"></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </>
        )}
      </div>
    </>
  );
};
