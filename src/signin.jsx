import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "./topbar";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [Backq, setBackq] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getdata", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Data");
        setData(data.data);
      });
  }, []);

  const navigate = useNavigate();
  function pop() {
    alert("Enter Valid Credentials!!");
  }

  const handleclick = async (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    console.log(name, pass);
    const nameExists = data.some((i) => name === i.name);
    const passwordMatch = data.some((i) => pass === i.password);
    console.log(nameExists, passwordMatch);
    if (nameExists && passwordMatch) {
      navigate("/profile");
    } else {
      pop();
    }
  };

  function Backqu() {
    setBackq(1);
  }

  return (
    <div>
      <TopBar />
      <center>
        <div className="container">
          <h4>Sign In</h4>
          <br />
          <form method="post">
            <input
              type="text"
              placeholder="User Name"
              className="form-group"
              onChange={function (e) {
                setName(e.target.value);
              }}
            ></input>
            <br />
            <input
              type="password"
              placeholder="Password"
              className="form-group"
              onChange={function (e) {
                setPass(e.target.value);
              }}
            ></input>
            <br />
            <button
              type="submit"
              name="submit"
              className="custom-button"
              onClick={handleclick}
            >
              Login
            </button>
            <br />
            <br />
            <button type="submit" className="custom-button" onClick={Backqu}>
              Back
            </button>
            {Backq ? navigate("/") : console.log(1)}
            <div class="down">
              Don't have an account? <a href="/lawyer">Sign up</a>
            </div>
          </form>
        </div>
        <br />
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
      </center>
      <footer class="footer">
        <p class="footer-text">© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
