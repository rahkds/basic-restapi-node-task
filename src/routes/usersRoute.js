
import express from "express";
import * as userController from "../controllers/usersController.js" 
import {createUserValidator, userIdValidator, updateUserValidator} from "../validators/user.validator.js";
import validate from "../middlewares/validate_req.middleware.js";

const router = express.Router();

router.post('/users', validate(createUserValidator),  userController.createUser);

router.get('/users',  userController.getAllUsers);

router.get('/users/:id', validate(userIdValidator),  userController.getUserById)

router.put('/users/:id', validate(userIdValidator), validate(updateUserValidator), userController.updateUser)

router.delete('/users/:id', validate(userIdValidator), userController.deleteUser);


export default router;
