const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const UserModel = require('./models/UserModel');

const bcrypt = require('bcryptjs');

const app = express();

const salt = bcrypt.genSaltSync(10)

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://nyamdier:ox7v6PnvQufRxh2d@cluster0.vw7mhw8.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await UserModel.create({
            username, 
            password : bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }

})

app.listen(4000)