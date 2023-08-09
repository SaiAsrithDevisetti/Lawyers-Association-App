import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function CommonBar() {
  const navigate = useNavigate();
  function Logout() {
    navigate("/");
  }

  return (
    <nav class="navbar">
      <div class="nav-header">
        <span class="material-symbols-outlined">gavel</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>

    // <div className="container-fluid">
    //   <nav className="navbar navbar-expand-lg">
    //     <a className="navbar-brand" href="">
    //       <a className="navbar-brand" href="">
    //         <span class="material-symbols-outlined">gavel </span>
    //       </a>
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <a className="nav-link" href="">
    //             <a className="nav-link" href="/">
    //               Home
    //             </a>
    //           </a>
    //         </li>
    //         <Outlet />
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
}
export default CommonBar;
