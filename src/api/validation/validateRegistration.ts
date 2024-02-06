import Joi from 'joi';

const userSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  firstName: Joi.string().min(3).max(30).required(),
  middleName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().required(),
  driversLicenceNo: Joi.string().required(),
  avatar: Joi.string().required(),
});

export default userSchema;
