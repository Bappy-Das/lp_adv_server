const mongoose = require('mongoose');

// Define a function to connect to the MongoDB database
const connectToDatabase = async () => {
    const mongoDBUrl = process.env.DATABASE_URL
    try {
        await mongoose.connect(mongoDBUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = mongoose.connection;
        console.log("Database Conneted to server".blue.bold);
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('Connected to the database');
        });
    } catch (error) {
        console.error('An error occurred while connecting to the database:', error);
    }
};
module.exports = connectToDatabase;
