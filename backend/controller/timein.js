const User = require('../model/User');
const Routine = require('../model/Routine');
const timein = async (req, res) => {
    const { id } = req.params;
    const { time } = req.body;
    await User.findByIdAndUpdate(id, {
        timein: time
    });
    console.log(time)
    //res.json(postDoc);
};

module.exports = timein;