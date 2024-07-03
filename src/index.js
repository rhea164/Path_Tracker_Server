require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes=require('./routes/authRoutes');
const trackRoutes=require('./routes/trackRoutes')
const requireAuth= require('./middlewares/requireAuth')

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri='mongodb+srv://rm2184:troyboltenisfromhsm%40174@cluster1.mbqdhil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';
mongoose.connect(mongoUri);

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance');
}  );

mongoose.connection.on('error',(err)=>{
    console.error('Error connecting to mongo',err)
})
//anytime someone makes a get type http request to the root route of this app, run this function
app.get('/',requireAuth,(req,res)=>{
    res.send(`your email is : ${req.user.email}`);
})

app.listen(3001,()=>{
    console.log('Listening on port 3001');
})

//this db is listening at port 3001 and that port is exposed as a public url using ngrok. 
//so when we make a post request to that ngrok url, we are essentially communicating with this db 
//bc it listens at that 3001 port which has been exposed.
//the connection to the mongoDB database is made through the mongoUri. so when any
//change is made using the ngrok url as the api then that change is listened to on the exposed port 3001
//and the change is then reflected in the connected mongoDB database.