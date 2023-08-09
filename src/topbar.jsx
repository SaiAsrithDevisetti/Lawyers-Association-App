import React from "react";

function TopBar() {
  return (
    // <div className="container-fluid">
    //   <nav className="navbar navbar-expand-lg">
    //     <a className="navbar-brand" href="">
    //       <span class="material-symbols-outlined">gavel </span>
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
    //             Sign In
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="">
    //             Sign Up
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
    <nav class="navbar">
      <div class="nav-header">
        <span class="material-symbols-outlined">gavel</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/signin">Sign In</a>
        </li>
        <li>
          <a href="/lawyer">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
export default TopBar;
