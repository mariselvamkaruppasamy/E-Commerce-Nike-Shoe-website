const adminData = require('../Models/AdminModel');


module.exports.insertAdminData = async (req, res) => {
    try {
        const { adminName, adminEmail, adminPassword } = req.body;

        const adminSign = new adminData({
            adminName,
            adminEmail,
            adminPassword
        });

        const savedAdmin = await adminSign.save();
        res.send(savedAdmin);
    } catch (err) {
        res.send(err);
    }
};



module.exports.adminList = async (req, res) => {
    try {
        const admins = await adminData.find();
        res.send(admins);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};



module.exports.adminLogin = async (req, res) => {
    const { adminEmail, adminPassword } = req.body;

    try {
        const admin = await adminData.findOne({ adminEmail: adminEmail });

        if (admin) {
            if (admin.adminPassword === adminPassword) {
                res.json({ message: "Success" });
            } else {
                res.json({ message: "Failed" });
            }
        } else {
            res.json({ message: "Admin not found" });
        }
    } catch (err) {
        res.json({ message: "Server error", error: err });
    }
};

