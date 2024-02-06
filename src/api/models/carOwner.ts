import mongoose, { Schema, Document } from 'mongoose';

interface CarOwner {
  email: string;
  password: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  phoneNumber: number;
  driversLicenseNo: string;
  avatar: string;
  carPicture: string;
  licensePicture: string;
}

const carOwnerSchema = new Schema<CarOwner & Document>({
  email: { type: String, required: true, unique: true, index: true },
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  driversLicenseNo: { type: String, required: true },
  avatar: { type: String, required: true },
  carPicture: { type: String, required: true },
  licensePicture: { type: String, required: true },
});

const CarOwnerModel = mongoose.model<CarOwner & Document>(
  'CarOwner',
  carOwnerSchema
);

export default CarOwnerModel;
