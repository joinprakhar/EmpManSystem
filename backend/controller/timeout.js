const User = require('../model/User');
const Routine = require('../model/Routine');
const timeout = async (req, res) => {
    const { id } = req.params;
    const { time } = req.body;
    await User.findByIdAndUpdate(id, {
        timeout: time
    });
    console.log(time)
    //res.json(postDoc);
};

module.exports = timeout;