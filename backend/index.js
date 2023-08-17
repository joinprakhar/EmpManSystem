const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'api/uploads' });


app.use(cors({
    credentials: true,
    origin: ['https://empms.vercel.app','http://localhost:3000']
}))
app.use(express.json())
app.use(cookieParser());
app.use('', express.static(__dirname + 'api/uploads'));

const login = require('./controller/login');
// const logout = require('./controller/logout');
const register = require('./controller/create');
const getAllEmp = require('./controller/getAllEmp');
const getSingleEmp = require('./controller/getSingleEmp');
const updateadmin = require('./controller/adminUpdate');
const updatetask = require('./controller/Assigntask');
const emplogin = require('./controller/loginemp');
const timein = require('./controller/timein');
const timeout = require('./controller/timeout');


mongoose.connect('mongodb+srv://test:test@cluster0.vynmb3w.mongodb.net/?retryWrites=true&w=majority')

app.post('/create', register)
app.post('/login', login)
app.get('/getallemp', getAllEmp)
app.get('/emp/:id', getSingleEmp)
app.post('/adminupdate/:id', updateadmin)
app.post('/updatetask/:id', updatetask)
app.post('/emplogin', emplogin)
app.post('/timein/:id', timein)
app.post('/timeout/:id', timeout)
// app.post('/logout', logout)



app.listen(4000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", "4000");
});