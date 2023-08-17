const User = require('../model/User');
const Routine = require('../model/Routine');
const updateadmin = async (req, res) => {
    const { id } = req.params;
        const { x  } = req.body;
    console.log("options");
    try {
        await User.findByIdAndUpdate(id, { isActive: x });
        res.status(200).json({ message: 'Boolean value updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the boolean value.' });
    }

    };

module.exports = updateadmin;