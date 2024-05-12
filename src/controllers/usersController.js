import * as userService from "../services/user.service.js";
import {SUCCESS_MSG, ERROR_MSG, VALIDATION_MSG} from "../constants/constants.js"

export const createUser  = async (req, res) => {
    try {
        let userExists = await userService.isUserExists(req.body);
        if(userExists) return res.status(400).json({status: false, message: VALIDATION_MSG.USER_ALREADY_EXISTS})
        await userService.createNewUser(req.body);
        return res.status(200).json({status: true, message: SUCCESS_MSG.USER_CREATED})
    } catch (error) {
        console.error(error);
        return res.status(500).json({status: false, message: ERROR_MSG.SERVER_ERROR})
    }
}


export const getAllUsers  = async (req, res) => {
    try {
       let users =  await userService.getAllUsers();
       return res.status(200).json({status: true, message: "Successfull", data : users})
    } catch (error) {
        console.error(error);
        return res.status(500).json({status: false, message: ERROR_MSG.SERVER_ERROR})        
    }
}


export const getUserById  = async (req, res) => {
    try {
       const {id : user_id} = req.params;
       let users =  await userService.getUserById(user_id);
       if(users.length == 0) {
          return res.status(400).json({status: false, message: VALIDATION_MSG.INVALID_USERID})
       }
       return res.status(200).json({status: true, message: "Successfull", data : users[0]})
    } catch (error) {
        console.error(error);
        return res.status(500).json({status: false, message: ERROR_MSG.SERVER_ERROR})        
    }
}

export const updateUser = async (req, res) => {
    try {
        const {id : user_id} = req.params;
        let userExists = await userService.isUserExistsByUserId({user_id});
        if(!userExists) return res.status(400).json({status: false, message: VALIDATION_MSG.INVALID_USERID})
        await userService.updateUser(user_id, req.body);
        return res.status(200).json({status: true, message: SUCCESS_MSG.USER_UPDATED})
    } catch (error) {
        console.error(error);
        return res.status(500).json({status: false, message: ERROR_MSG.SERVER_ERROR})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id : user_id} = req.params;
        let userExists = await userService.isUserExistsByUserId({user_id});
        if(!userExists) return res.status(400).json({status: false, message: VALIDATION_MSG.INVALID_USERID})
        await userService.deleteUser(user_id);
        return res.status(200).json({status: true, message: SUCCESS_MSG.USER_DELETED})
    } catch (error) {
        console.error(error);
        return res.status(500).json({status: false, message: ERROR_MSG.SERVER_ERROR})
    }
}




