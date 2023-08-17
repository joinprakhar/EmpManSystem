const User = require('../model/User');

const getAllEmp = async (req, res) => {
    res.json(
        await User.find()
            .populate('name', ['name'])
            .sort({ createdAt: -1 })
            
    );
}

module.exports = getAllEmp;
