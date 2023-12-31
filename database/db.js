import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const MONGODB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-spyedtr-shard-00-00.plpt6gt.mongodb.net:27017,ac-spyedtr-shard-00-01.plpt6gt.mongodb.net:27017,ac-spyedtr-shard-00-02.plpt6gt.mongodb.net:27017/?ssl=true&replicaSet=atlas-gu2r9q-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting to the database ', error.message);
    }
}

export default DBConnection;