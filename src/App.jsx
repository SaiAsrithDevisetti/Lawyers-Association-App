import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Veri from "./verify";
import Pres from "./president";
import Law from "./lawyers";
import Login from "./signin";
import Profile from "./profile";
import Update from "./update";
import UpdateProfile from "./updateprofile";
import Chat from "./chat";
import Chatadmin from "./chatadmin";

function IntoProfile() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Veri />}></Route>
        <Route path="/admin" element={<Pres />}></Route>
        <Route path="/lawyer" element={<Law />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/chatadmin" element={<Chatadmin />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/updateprofile/:id" element={<UpdateProfile />}></Route>
      </Routes>

      <Outlet />
    </div>
  );
}

export default IntoProfile;
