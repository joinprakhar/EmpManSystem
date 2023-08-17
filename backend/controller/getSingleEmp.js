const User = require('../model/User');
const Routine = require('../model/Routine');

const getSingleEmp = async (req, res) => {
    const { id } = req.params;
    const postDoc = await User.findById(id);
    const taskDoc = await Routine.find({ user: { $in: id } })
    res.json([postDoc ,taskDoc]);
}

module.exports = getSingleEmp;