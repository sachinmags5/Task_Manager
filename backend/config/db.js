import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DB_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/task_db';
console.log(`Database URI: ${DB_URI}`);

export const connectDB = async () => {
    try {   
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export const disconnectDB = async () => {           
    try {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
    catch (error) {
        console.error('Error disconnecting from MongoDB:', error);
        process.exit(1);
    }   
};