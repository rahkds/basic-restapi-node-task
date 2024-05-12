import db from "../connections/db.js";

export const isUserExists = async ({email}) => {
    return await db.getDataStore('slave').getRepository("Users").exist({ where: { email} });
}

export const isUserExistsByUserId = async ({user_id}) => {
    return await db.getDataStore('slave').getRepository("Users").exist({ where: { user_id} });
}

export const createNewUser = async(body) => {
    return await db.getDataStore().getRepository("Users").save(body);
}

export const getAllUsers = async() => {
    return await db.getDataStore('slave').getRepository("Users").find({});
}

export const getUserById = async(userId) => {
    return await db.getDataStore('slave').getRepository("Users").find({where : {user_id:userId}});
}

export const updateUser = async(user_id, body) => {
    return await db.getDataStore().getRepository("Users").update({user_id},body);
}

export const deleteUser = async(user_id) => {
    return await db.getDataStore().getRepository("Users").delete({user_id});
}

