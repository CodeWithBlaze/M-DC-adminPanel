import react, { useEffect, useState } from "react";
import "./Home.css";
import * as api from "../../../axios/axiosReq";
import { useNavigate, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";


export const Home = (props) => {

  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("dcuser"));
  const isUser = user?.token ? true : false;
  if (!isUser) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }

  const handleLogout = () => {
    localStorage.removeItem("dcuser");
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };

  return (
    <>
      <div className="home-container">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography
                className="navlinks"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <NavLink style={{ underline: "none", color: "white" }} to="/">
                  Institute
                </NavLink>
                <NavLink
                  style={{ marginLeft: "2rem", border: "none", color: "white" }}
                  to=""
                >
                  Users
                </NavLink>
              </Typography>

              <Button
                color="inherit"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};
