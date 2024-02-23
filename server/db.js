import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI=process.env.MONGO_URL;

const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log('successfully connected to database');
    })
    .catch((error)=>{
        console.log(error);
    })
}

export default connectToMongo;