const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const app = express()

const port = process.env.PORT
app.get("/", (req, res)=>{
    res.send("<h1>Hello World</h1>") // send the response to client side
})

const dbConnection = async ()=>{

    const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
    host: 'localhost', // PostgreSQL container name
    port: 5432, // PostgreSQL default port
    database: 'crud_postgres',
    user: 'postgres',
    password: '12345678', // The password you set when starting the PostgreSQL container
  });

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    
    // Example: Query the database
    // return client.query('SELECT * FROM your_table_name');
  })
  .catch((err) => {
    // Handle any errors
    console.error('Error:', err);
  })

    
}

app.listen(port, ()=>{
    console.log("server is running at",port)
    dbConnection()
})








// sudo docker run -d --net mongo-network --name mongodb \
// 	-e MONGO_INITDB_ROOT_USERNAME=admin \
// 	-e MONGO_INITDB_ROOT_PASSWORD=password \
// 	mongo

// sudo docker run -d --net mongo-network \
//     -p8081:8081 \
// 	-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
// 	-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
//     -e ME_CONFIG_MONGODB_SERVER=mongodb \
// 	mongo-express