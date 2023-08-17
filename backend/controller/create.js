const express = require('express');
const User = require('../model/User');
const Admin = require('../model/admin');


const create = async (req, res) => {
    const { name, email, password, isAdmin, add, phone ,isActive, task, timein, timeout} = req.body;

    if (isAdmin) {
        try {
            const userDoc = await Admin.create({
                name,
                email,
                password,
                isAdmin: true,
                isActive: true,
            })
            res.json(userDoc)
        } catch (err) {
            res.status(400).json(err);
        }
    } else {
        try {
            const userDoc = await User.create({
                name,
                email,
                password,
                isActive,        
                phone,
                task,  
                address : add,  
                timein,
                timeout,
            })

            res.json(userDoc)
        } catch (err) {
            res.status(400).json(err);
        }
}
    
    console.log(isAdmin)
}

module.exports = create