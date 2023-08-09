const express = require("express");
require("./db");
const app = express();
const cors = require("cors");

const Data = require("./lawyersdata");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/postdata", (req, res) => {
  console.log(req.body);
  const question = new Data(req.body);
  question
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.get("/getdata", async (req, res) => {
  try {
    const userdata = await Data.find({});
    res.send({ status: "ok", data: userdata });
  } catch (e) {
    console.log(e);
  }
});

app.post("/deletedata", async (req, res) => {
  const { userid } = req.body;
  try {
    await Data.deleteOne({ _id: userid });
    res.send({ status: "OK", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

// app.put("/updatedata/:id", async (req, res) => {
//   const { userid } = req.params;
//   const { name } = req.body;
//   const { phone } = req.body;
//   const { email } = req.body;
//   const { regid } = req.body;
//   const { bio } = req.body;
//   console.log(name);
//   console.log(phone);
//   console.log(email);
//   console.log(regid);
//   console.log(bio);
//   try {
//     const updatedData = await Data.findByIdAndUpdate(userid, {
//       name: name,
//       phonenumber: phone,
//       emailid: email,
//       registerid: regid,
//       bio: bio,
//     });

//     res.send({ status: "OK", data: "updated" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: "Server error" });
//   }
// });

app.put("/updatedata/:id", async (req, res) => {
    const { id } = req.params;
    const { name, phone, email, regid, bio } = req.body;
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(regid);
    console.log(bio);  
    try {
      const updatedData = await Data.findByIdAndUpdate(id, {
        name: name,
        phonenumber: phone,
        emailid: email,
        registerid: regid,
        bio: bio,
      });
  
      res.send({ status: "OK", data: "updated" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Server error" });
    }
  });
  

app.listen(5000, () => {
  console.log(`server is running on the port 5000`);
});
