import express from "express";
import { connectToDatabase } from "./services/database.service";
import { taskRouter } from "./routes/tasks.router";
import { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import {User} from "./models/User";
import { BodyParser } from "body-parser";
import mongoose from "mongoose";
const allowedOrigins = ['http://localhost:3000'];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const networkOptions: cors.CorsOptions = {
  origin: allowedOrigins
}
const app = express();
app.use(cors(networkOptions));
app.use(express.urlencoded());
const port = 8000;
dotenv.config();
mongoose.connect("mongodb+srv://test:fYuCGg1UYyAgTKuW@cluster0.4liaa.mongodb.net/kbdDB"
);()=>{
  console.log("Connected to database");
}



    app.post("/api/signup",(req,res)=>{
      console.log(req.body) 
      const {name,email,password} =req.body;
      User.findOne({email:email},(err,user)=>{
          if(user){
              res.send({message:"user already exist"})
          }else {
              const user = new User({name,email,password})
              user.save(err=>{
                  if(err){
                      res.send(err)
                  }else{
                      res.send({message:"sucessfull"})
                  }
              })
          }
      })
  
  
  }) 
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
