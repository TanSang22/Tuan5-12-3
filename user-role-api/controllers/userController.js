const User = require("../models/User");

exports.createUser = async (req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.json(user);
    }catch(err){
        res.status(500).json(err);
    }
};

exports.getUsers = async (req,res)=>{
    const users = await User.find({isDeleted:false}).populate("role");
    res.json(users);
};

exports.getUserById = async (req,res)=>{
    const user = await User.findById(req.params.id).populate("role");
    res.json(user);
};

exports.updateUser = async (req,res)=>{
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.json(user);
};

exports.deleteUser = async (req,res)=>{
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {isDeleted:true},
        {new:true}
    );

    res.json(user);
};

exports.disableUser = async (req,res)=>{

    const {email,username} = req.body;

    const user = await User.findOneAndUpdate(
        {email:email,username:username},
        {status:false},
        {new:true}
    );

    res.json(user);
};

exports.getUsersByRole = async (req,res)=>{

    const users = await User.find({
        role:req.params.id,
        isDeleted:false
    }).populate("role");

    res.json(users);
};

exports.enableUser = async (req,res)=>{

    const {email,username} = req.body;

    const user = await User.findOneAndUpdate(
        {email:email,username:username},
        {status:true},
        {new:true}
    );

    res.json(user);
};