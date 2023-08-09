import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import { BrowserRouter, useNavigate } from "react-router-dom";

function Lawyer() {
  const [Backq, setBackq] = useState(0);
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Mail, setMail] = useState("");
  const [Bio, setBio] = useState("");
  const [RegId, setRegId] = useState("");
  const [Password, setPassword] = useState("");

  let name2, phone, mailID, biodata, regID, password;
  let name, val;
  let nameof, phno, email, bio, regid, pass;
  const navigate = useNavigate();
  function Backqu() {
    setBackq(1);
  }
  const handleInput = (e) => {
    name = e.target.name;
    val = e.target.value;
    if (name === "nameof") {
      setName(val);
    } else if (name === "phno") {
      setPhone(val);
    } else if (name === "email") {
      setMail(val);
    } else if (name === "bio") {
      setBio(val);
    } else if (name === "regid") {
      setRegId(val);
    } else if (name === "pass") {
      setPassword(val);
    }
    console.log(name);
    console.log(val);
  };
  const PostData = async (e) => {
    e.preventDefault();
    name2 = Name;
    phone = Phone;
    mailID = Mail;
    biodata = Bio;
    regID = RegId;
    password = Password;
    const res = await fetch("http://localhost:5000/postdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name2,
        phonenumber: phone,
        emailid: mailID,
        registerid: regID,
        password: password,
        bio: biodata
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Error Occured while Uploading");
      console.log("Not Sucess");
    } else {
      window.alert("Registerd Sucessfully, Sign In to Continue");
      console.log("Sucess");
    }
  };
  return (
    <div>
      <CommonBar />
      <div className="form" method="POST">
        <br />
        <br />
        <center>
          <div className="container2">
            <h4>Register</h4>
            <br />
            <form method="post">
              <input
                type="text"
                className="form-group"
                placeholder="Name"
                id="question"
                name="nameof"
                value={nameof}
                onChange={handleInput}
              ></input>
              <input
                type="text"
                className="form-group"
                placeholder="Phone Number"
                id="answer"
                name="phno"
                value={phno}
                onChange={handleInput}
              ></input>
              <input
                type="text"
                className="form-group"
                placeholder="Email"
                id="answer"
                name="email"
                value={email}
                onChange={handleInput}
              ></input>
              <input
                type="text"
                className="form-group"
                placeholder="Registration ID"
                id="answer"
                name="regid"
                value={regid}
                onChange={handleInput}
              ></input>
              <input
                type="text"
                className="form-group"
                placeholder="Bio"
                id="answer"
                name="bio"
                value={bio}
                onChange={handleInput}
              ></input>
              <input
                type="text"
                className="form-group"
                placeholder="Password"
                id="answer"
                name="pass"
                value={pass}
                onChange={handleInput}
              ></input>
              <button
                type="submit"
                className="custom-button"
                onClick={PostData}
              >
                Register
              </button>
              <br />
              <br />
              <button type="submit" className="custom-button" onClick={Backqu}>
                Back
              </button>
              {Backq ? navigate("/") : console.log(1)}
              <div class="down">
                Already have an account? <a href="/signin">Sign In</a>
              </div>
            </form>
          </div>
        </center>
      </div>
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
      <footer class="footer">
        <p class="footer-text">© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Lawyer;
