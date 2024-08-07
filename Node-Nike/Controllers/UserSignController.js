const userSignData = require("../Models/UserSignModel")
const bcrypt = require('bcrypt');

module.exports.insertUser = [
    (req, res) => {
        const signup = new userSignData({
            fullName: req.body.fullName,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userNumber: req.body.userNumber,
            password: req.body.password
        })

        signup.save()
            .then((e) => {
                res.send(e)
            })
            .catch((err) => {
                res.send(err)
            })
    }
]

module.exports.listUser = [
    (req, res) => {
        userSignData.find()
            .then((e) => {
                res.send(e)
            })
            .catch((err) => {
                res.send(err)
            })
    }
]

module.exports.deleteUser = [
    (req, res) => {
        userSignData.deleteOne({ _id: req.params.id })
            .then((user) => {
                res.send(user)
            })
            .catch((err) => {
                res.send(err)
            })
    }
]



module.exports.userLogin = async (req, res) => {
    const { userEmail, password } = req.body;

    try {
        const user = await userSignData.findOne({ userEmail });

        if (!user) {
            return res.status(404).json({ userFound: false, message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            res.status(200).json({ 
                userFound: true, 
                message: "Login successful",
                userId: user._id, 
                userName: user.userName, 
                userProduct: user.productId 
            });
        } else {
            res.status(401).json({ userFound: false, message: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports.updateUser = (req, res)=>{
    const {productId} = req.body;
    const userId = req.params.id;

    if(!productId){
        return res.status(400).json({ message: 'Product is Required'})
    }

    userSignData.findByIdAndUpdate(
        userId,
        {$addToSet: {productId: productId}},
        { new: true, runValidators: true}
    )

        .then(user =>{
            if(!user){
                return res.status(404).json({message: 'User not found'})
            }
            res.json(user);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({message: 'Server Error'})
            
        })
};

module.exports.remove = async (req, res)=>{
    const userId = req.params.id;
    const {productId} = req.body;

    if(!productId){
        return res.status(400).json({message: 'Product Id Required'});
    }

    try{
        const user = await userSignData.findByIdAndUpdate(userId);
        if (!user){
            return res.status(404).json({message: 'User not found'});
        }

        if(!user.productId.includes(productId)){
            return res.status(400).json({message: 'Product not found in Cart'});
        }

        user.productId = user.productId.filter(id => id !== productId);
        await user.save();
        res.json(user);
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports.addCart = async (req, res)=>{
    const userId = req.params.id;

    try{
        const user = await userSignData.findById(userId).exec();

        if(!user){
            return res.status(404).json({ message: 'User not found'});
        }

        res.status(200).json({
            success: true,
            cartList:user.productId,
        });
    }
    catch (err){
        console.error(err);
        res.status(500).json({ message: 'Server Error'});
    }
};