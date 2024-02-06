import Joi from 'joi';

export const userSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  password: Joi.string().required(),
  firstName: Joi.string().min(3).max(30).required(),
  middleName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().required(),
  driversLicenceNo: Joi.string().required(),
  avatar: Joi.string().required(),
});
