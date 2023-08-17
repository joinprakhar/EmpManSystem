const User = require('../model/User');
const status = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const postDoc = await User.findById(id);

    if (!postDoc) {
        return res.status(400).json('error');
    }
    await User.findByIdAndUpdate(id, {
        task: status
    });
    console.log(task)
    res.json(postDoc);
};

module.exports = status;