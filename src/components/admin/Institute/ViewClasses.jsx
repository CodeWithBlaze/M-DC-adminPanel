import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import * as api from "../../../axios/axiosReq";

export const ViewClasses = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"));
  const isUser = user?.token ? true : false;
  if (!isUser) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }
  const [classes, setClasses] = useState([]);

  let institute_id = useParams().id;

  useEffect(() => {
    let getClasses = async () => {
      let res = await api.getClasess(institute_id);
      setClasses(res.data);
    };

    getClasses();
  }, []);

  const handleClass = async (class_id) => {
    console.log(class_id);
    setTimeout(() => {
      navigate(`/participant/${institute_id}/${class_id}`);
    }, 1000);
  };

  return (
    <>
      <div className="container">
        <table>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>View</th>
          </tr>
          {classes?.map((val, key) => {
            return (
              <tr value={val.id}>
                <td>{val.class_name}</td>
                <td
                  onClick={() => {
                    handleClass(val.id);
                  }}
                >
                  Edit
                </td>
                <td
                  onClick={() => {
                    setTimeout(() => {
                      navigate(`/class/${institute_id}/${val.id}`);
                    }, 1000);
                  }}
                >
                  View Class
                </td>
              </tr>
            );
          })}
        </table>
        <Button
          onClick={() => {
            navigate(`/addclass/${institute_id}`);
          }}
        >
          Add classes
        </Button>
      </div>
    </>
  );
};
