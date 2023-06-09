// Import dependencies
const { config } = require('dotenv');
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Create Express app
const app = express();
const port =  9000;

// MongoDB connection string
const connectionString = "mongodb+srv://rsrahulsharma308:patanahi@cluster0.ctv1euh.mongodb.net/";

// Define routes
app.get('/api/restaurent', async (req, res) => {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(connectionString, { useUnifiedTopology: true });
    const dbo = await client.db("sample_restaurants");
    // console.log(db);
    // Retrieve data from MongoDB
    
    const users = await dbo.collection('restaurants').find({}).toArray();
    
    // Close the connection
    client.close();
    // Send the response
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
