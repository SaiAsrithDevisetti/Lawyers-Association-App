import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";
import "../public/style.css";

function Update() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  useEffect(() => {
    getAlldata();
  }, []);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (data.length > 0) {
      const selected = data.find((item) => item._id === id);
      setSelectedData(selected);
    }
  }, [data, id]);

  const handleSubmit = (id, name, phone, email, regid, bio) => {
    if (window.confirm("Are you sure you want to update the user?")) {
      fetch("http://localhost:5000/updatedata/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          regid: regid,
          bio: bio
        })
      })
        .then((res) => res.json())
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const [Backq, setBackq] = useState(0);
  function Backqu() {
    setBackq(1);
  }

  return (
    <div>
      {selectedData ? (
        <div>
          <CommonBar />
          <div className="form">
            <br />
            <br />
            <div className="container2">
              <h4>Update the Profile</h4>
              <br />
              <form>
                <div>
                  <label htmlFor="nameof">Name:</label>
                  <input
                    type="text"
                    className="form-group"
                    placeholder="Name"
                    id="question"
                    name="nameof"
                    value={selectedData.name}
                    onChange={(e) =>
                      setSelectedData({ ...selectedData, name: e.target.value })
                    }
                  ></input>
                </div>
                <div>
                  <label htmlFor="nameof">Phone:</label>
                  <input
                    type="text"
                    className="form-group"
                    placeholder="Phone Number"
                    id="answer"
                    name="phno"
                    value={selectedData.phonenumber}
                    onChange={(e) =>
                      setSelectedData({
                        ...selectedData,
                        phonenumber: e.target.value
                      })
                    }
                  ></input>
                </div>
                <div>
                  <label htmlFor="nameof">Email ID:</label>
                  <input
                    type="text"
                    className="form-group"
                    placeholder="Email"
                    id="answer"
                    name="email"
                    value={selectedData.emailid}
                    onChange={(e) =>
                      setSelectedData({
                        ...selectedData,
                        emailid: e.target.value
                      })
                    }
                  ></input>
                </div>

                <div>
                  <label htmlFor="nameof">Registration ID:</label>
                  <input
                    type="text"
                    className="form-group"
                    placeholder="Registration ID"
                    id="answer"
                    name="regid"
                    value={selectedData.registerid}
                    onChange={(e) =>
                      setSelectedData({
                        ...selectedData,
                        registerid: e.target.value
                      })
                    }
                  ></input>
                </div>
                <div>
                  <label htmlFor="nameof">Bio :</label>
                  <input
                    type="text"
                    className="form-group"
                    placeholder="Bio"
                    id="answer"
                    name="bio"
                    value={selectedData.bio}
                    onChange={(e) =>
                      setSelectedData({ ...selectedData, bio: e.target.value })
                    }
                  ></input>
                </div>
                <center>
                  <button
                    type="submit"
                    className="custom-button"
                    onClick={() => {
                      handleSubmit(
                        selectedData._id,
                        selectedData.name,
                        selectedData.phonenumber,
                        selectedData.emailid,
                        selectedData.registerid,
                        selectedData.bio
                      );
                    }}
                  >
                    Update
                  </button>
                  <br />
                  <br />
                  <button
                    type="submit"
                    className="custom-button"
                    onClick={Backqu}
                  >
                    Back
                  </button>
                  {Backq ? navigate("/profile") : console.log(1)}
                </center>
              </form>
            </div>
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Update;
