const express = require('express');
const Admin = require('../model/admin');

const login = async (req, res) => {
    const { email, password } = req.body;

    const userDoc = await Admin.findOne({ email });

    if (userDoc && userDoc.password === password) {
        res.json(userDoc);
    } else {
        res.status(401).json({ error: 'Invalid Credentials' });
    }

    console.log(userDoc);
}

module.exports = login;

// const express = require('express');
// const Admin = require('../model/admin');

// const login = async (req, res) => {
//     const { email, password } = req.body;

//     const userDoc = await Admin.findOne({ email })

//     if (userDoc.password === password){
//         res.json(userDoc)
//     }
//     else{
//         res.error('Invalid Creditentials')
//     }
    
//     console.log(userDoc);
// }

// module.exports = login