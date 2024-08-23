import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME || 'your_default_username';
    const PASSWORD = process.env.DB_PASSWORD || 'your_default_password';

    const MONGO_URI = `mongodb+srv://${USERNAME}:${encodeURIComponent(PASSWORD)}@cluster0.okekb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(MONGO_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            ssl: true,
            tlsInsecure: true // Option for development, remove for production
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database:', error);
    }
}

export default DBConnection;
