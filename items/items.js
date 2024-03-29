import express from 'express';
import mongoose from 'mongoose';

import Router from '../routers/routerItem.js'

const app = express();
app.use(express.json())


mongoose
    .connect('mongodb+srv://Maksim:4CBP3zDuJ7UJCbHI@maksim.ppszojk.mongodb.net/payments')
    .then(() => console.log("Database is ok"))
    .catch((err) => console.log("Database is not ok", err))
    

app.use('/api', Router);

// Starting the server on port 8010
app.listen(8002, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Server is running on port 8002");
  });