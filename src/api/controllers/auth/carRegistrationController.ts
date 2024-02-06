import carOwner from '../../models/carOwner';
import bycrpt from 'bcrypt';
import { validate } from 'email-validator';

const handleNewCarOwner = async (req, res) => {
  const {
    email,
    firstName,
    middleName,
    lastName,
    phoneNumber,
    driversLicenseNo,
    avatar,
    carPicture,
    licensePicture,
  } = req.body;
};
