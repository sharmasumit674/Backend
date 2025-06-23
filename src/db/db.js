import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async ()=>{
    try {
        const instance = mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        // console.log(`\n Mongo Connect :${instance.connection.host}`);
        console.log("Mongodb connected");
    } 
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default dbConnect;