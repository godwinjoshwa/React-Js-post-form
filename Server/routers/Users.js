const express = require('express');
const Route = express.Router();
const userSchema = require('../schema')

Route.post('/addusers', async (req, res) => {

    try {
        var FirstName = await userSchema.findOne({ firstname: req.body.firstname})
        if(FirstName){
            return res.status(400).json('firstname already exists')
        }
        var LasttName = await userSchema.findOne({ lastname: req.body.lastname })
        if(LasttName){
            return res.status(400).json('lastname already exists')
        }
   
        var user = await new userSchema({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            gender: req.body.gender,
            job: req.body.job,
            join: new Date()
        });

        var data = await user.save()
        res.json(data)
    }
    catch (err) {
        res.status(400).json(err)
    }
    res.json(user)
})

Route.get('/allusers', async (req, res) => {
    const getUsers = await userSchema.find()
    res.json(getUsers)
})

module.exports = Route

