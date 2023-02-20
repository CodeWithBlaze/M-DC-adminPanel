import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/admin/Home/Home";
import { Login } from "./components/auth/Login/Login";
import { Institute } from "./components/admin/Institute/Institute";
import { Participant } from "./components/admin/Institute/Participant";
import { AddInstitute } from "./components/admin/Institute/AddInstitute";
import { Mod } from "./components/admin/Institute/Mod";
import { AddMod } from "./components/admin/Institute/AddMod";
import { ViewClasses } from "./components/admin/Institute/ViewClasses";
import { AddClass } from "./components/admin/Institute/AddClass";
import { Tutor } from "./components/admin/Institute/Tutor";
import { useState } from "react";
import { IndividualClass } from "./components/admin/Institute/IndividualClass";

function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Institute />} />
            <Route exact path="/addinstitute" element={<AddInstitute />} />
            <Route exact path="/mod/:id" element={<Mod />} />
            <Route exact path="/addmod/:id" element={<AddMod />} />
            <Route exact path="/viewclasses/:id" element={<ViewClasses />} />
            <Route exact path="/addclass/:id" element={<AddClass />} />
            <Route
              exact
              path="/participant/:id/:cid"
              element={<Participant />}
            />
            <Route exact path="/class/:id/:cid" element={<IndividualClass />} />
            <Route exact path="/tutor" element={<Tutor />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
