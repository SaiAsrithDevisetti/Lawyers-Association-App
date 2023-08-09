import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import { BrowserRouter, useNavigate } from "react-router-dom";

function President() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAlldata();
  }, []);

  const getAlldata = () => {
    fetch("http://localhost:5000/getdata", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Data");
        setData(data.data);
      });
  };

  const deleteUser = (id, name) => {
    if (window.confirm("Are you sure you want to delete the user")) {
      fetch("http://localhost:5000/deletedata", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          userid: id
        })
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAlldata();
        });
    } else {
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      <CommonBar />
      <br />
      <br />
      <center>
        <h4>All the Lawyers in the association under the admin.</h4>
        <br />
      </center>
      {data.map((i) => (
        <div class="card" width="5%">
          <div class="card-body">
            <h5 class="card-title">
              {i.name}
              <span
                class="material-symbols-outlined"
                onClick={() => {
                  deleteUser(i._id, i.name);
                }}
              >
                delete
              </span>
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Lawyer</h6>
            <p class="card-text">
              {i.phonenumber}
              <br />
              {i.emailid}
              <br />
              {i.registerid}
              <br />
              {i.bio}
            </p>
            <a href={`/update/${i._id}`} class="card-link">
              Edit Profile
            </a>
            <a href="/chatadmin" class="card-link">
              Chat with Lawyer
            </a>
          </div>
        </div>
      ))}

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

export default President;
