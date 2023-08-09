import React, { useEffect, useState } from "react";
import TopBar from "./topbar";
import { useNavigate } from "react-router-dom";

function Veri() {
  const [pop, setpop] = useState(0);
  const [test, settest] = useState(0);

  const navigate = useNavigate();

  function PopulateDB() {
    setpop(1);
    settest(0);
  }

  function Test() {
    setpop(0);
    settest(1);
  }
  return (
    <div className="EntryPage">
      <TopBar />
      <div class="intro-container">
        <br />
        <br />
        <h1 class="intro-heading">Welcome to Our Website</h1>
        <br />
        <p class="intro-text">
          The lawyers association is a collective organization that represents
          the interests of attorneys. This association serve as a unified voice
          for attorneys, working towards a fair and effective legal system.
        </p>
        <a href="#" class="intro-button">
          Learn More
        </a>
        <br />
        <br />
      </div>
      <center>
        <div class="intro-options">
          <p>Continue as</p>
          <a href="/admin" class="intro-option-button">
            Admin
          </a>{" "}
          | {""}
          <a href="/lawyer" class="intro-option-button">
            Lawyer
          </a>
        </div>
      </center>

      <div class="social-icons">
        <a href="https://www.instagram.com">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <br />
      <br />
      <footer class="footer">
        <p class="footer-text">© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Veri;
