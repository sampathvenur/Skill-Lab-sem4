const express = require('express');
const mongoose = require('mongoose');
const route = require('./src/route/route');

const PORT = 2500;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sampathkumarvenur:sampath%40mongodb@cluster0.bm5sgxo.mongodb.net/mydb")
    .then(() => {
        console.log("Database Connected!!");
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err.message);
    });

app.use('/', route);

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
