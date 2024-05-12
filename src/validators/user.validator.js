import Joi from 'joi';

export const createUserValidator = {
    body : Joi.object().keys({
       email : Joi.string().email().required(),
       first_name : Joi.string().required(),
       last_name : Joi.string().optional(),
       phone_number : Joi.string().length(10).pattern(/^[0-9]+$/).optional(),
    })
}

export const userIdValidator = {
    params: Joi.object().keys({
        id: Joi.string().required(),
    })
}

export const updateUserValidator = {
    body : Joi.object().keys({
       first_name : Joi.string().optional(),
       last_name : Joi.string().optional().allow(""),
       phone_number : Joi.string().length(10).pattern(/^[0-9]+$/).optional(),
    }).min(1)
}