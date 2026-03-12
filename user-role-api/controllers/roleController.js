const Role = require("../models/Role");

exports.createRole = async (req,res)=>{
    try{
        const role = new Role(req.body);
        await role.save();
        res.json(role);
    }catch(err){
        res.status(500).json(err);
    }
};

exports.getRoles = async (req,res)=>{
    const roles = await Role.find();
    res.json(roles);
};

exports.getRoleById = async (req,res)=>{
    const role = await Role.findById(req.params.id);
    res.json(role);
};