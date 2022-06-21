const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const blogRouter = require('./routes/blog');
const router = require('./routes/user');
require("dotenv").config();

app.use(cors({ origin: "*",}));
app.use(express.json());


app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });


  app.get('/',(req,res)=>{
    res.send("Welcome to Blog!");
  })
  
  const server = app.listen(process.env.PORT || 5000, () =>
    console.log(`Server started on ${process.env.PORT}`)
  );
  