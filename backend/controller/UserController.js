const UserModel = require("../models/User");
const createUser = async (req,res)=>{
    try{
        const {name,fatherName,email,phone}  = req.body
        const newUser = new UserModel({
            name,fatherName,email,phone
        })
        await newUser.save();
        res.status(200).json({
            success:true,
            status:'User Create Success',
            data:newUser
        })
    }catch (e) {
        console.log(e);
        res.status(404).json({
            success:false,
            status:'User Create Failed',
            data:e
        })
    }
}

const readUser = async (req,res)=> {
    try {
        const user = await UserModel.find(undefined, undefined, undefined)
        if (!user) {
            return res.status(404).json({
                success: false,
                data: 'User Not Found'
            })
            } else {
            res.status(200).json({
                success: true,
                data: user
            })
        }
    } catch (e) {
        console.log(e)
        res.status(404).json({
            success: false,
        })
    }
}

const updateUser = async (req,res)=>{
    try {
        const UserId = req.params.id
        const UpdateUser = await UserModel.findByIdAndUpdate(UserId,req.body,{new:true});
        if (!UpdateUser){
            return res.status(404).json({
                success:false,
                data:'User Not Found'
            });
            }else {
            res.status(200).json({
                success:true,
                message:'Update Data Success',
                data:UpdateUser
            });
        }
    }catch (e) {
        console.log(e)
        res.status(404).json({
            success:false,
            data:e
        })
    }
}

const deleteUser = async (req,res)=>{
    try {
        const UserId = req.params.id
        const DeleteUser = await UserModel.findByIdAndDelete(UserId);
        if (!DeleteUser){
            return res.status(404).json({
                success:false,
                data:'User Delete Failed'
            });
        }else {
            res.status(200).json({
                success:true,
                data:'User Delete Success'
            });
        }
    }catch (e) {
        console.log(e);
        res.status(404).json({
            success:false,
            data:e
        })
    }
}

module.exports = {createUser,readUser,updateUser,deleteUser}