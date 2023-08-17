const User = require('../model/User');
const Routine = require('../model/Routine');
const updatetask = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    const postDoc = await User.findById(id);

    if (!postDoc) {
        return res.status(400).json('error');
    }
    await User.findByIdAndUpdate(id, {
        task: task
    });
    console.log(task)
    res.json(postDoc);
};

module.exports = updatetask;