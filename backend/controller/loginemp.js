const express = require('express');
const User = require('../model/User');


const emplogin = async (req, res) => {
    const { email, password } = req.body;

    const userDoc = await User.findOne({ email })    
    
    if (userDoc && userDoc.password === password) {
        res.json(userDoc);
    } else {
        res.status(401).json({ error: 'Invalid Credentials' });
    }
    console.log(userDoc);
}

module.exports = emplogin