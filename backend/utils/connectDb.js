
import mongoose from "mongoose";

const connectDb =()=> mongoose.connect("mongodb://127.0.0.1:27017/aws").then(()=>{
  console.log("Mongoose is connected")
}).catch((err)=>{
  console.log(err)
});

export default connectDb