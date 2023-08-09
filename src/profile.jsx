// import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import React, { useEffect, useState } from "react";

function ProfilePage() {
  const [data, setData] = useState([]);
  let person = localStorage.getItem("name");
  let id, phone, email, regid, bio, pass;
  useEffect(() => {
    fetch("http://localhost:5000/getdata?name=${person}", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Data");
        setData(data.data);
      });
  }, []);
  data.map((i) => {
    if (i.name === person) {
      id = i._id;
      phone = i.phonenumber;
      email = i.emailid;
      regid = i.registerid;
      bio = i.bio;
      pass = i.password;
    }
  });
  const [Backq, setBackq] = useState(0);
  function Backqu() {
    setBackq(1);
  }
  // const [chatter, setChatter] = useState();
  // localStorage.setItem("chatter", person);

  return (
    <div>
      <CommonBar />
      <div className="form" method="POST">
        <br />
        <br />
        <center>
          <div class="card">
            <center>
              <img
                src="https://cdn.soolegal.com/assets/uploads/user_profile_pic/_thumb/20171220012036.png"
                class="card-img-top img-fluid"
                alt="..."
                className="small-image"
              ></img>
            </center>
            <div class="card-body">
              <h5 class="card-title">{person}</h5>
              <p class="card-text">{bio}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{phone}</li>
              <li class="list-group-item">{email}</li>
              <li class="list-group-item">{regid}</li>
              <li class="list-group-item">{pass}</li>
            </ul>
            <div class="card-body">
              <a href={`/updateprofile/${id}`} class="card-link">
                Edit Profile
              </a>
              <a href="/chat" class="card-link">
                Send/View Feedback
              </a>
            </div>
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

export default ProfilePage;
