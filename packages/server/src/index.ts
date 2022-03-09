import SessionModel from "../models/Session";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cinema-app-cluster.ldyyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})


const app = express();
app.use(express.json());
app.use(cors());
const port = 3003;
app.get('/', async (req, res) => {
  SessionModel.find({}, (error, result) =>{
      if(error){
          res.send(error);
      }
      res.send(result);
  });
});
app.listen(port, () => console.log(`Running on port ${port}`));