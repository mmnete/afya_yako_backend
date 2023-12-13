// Defines the schema for the user table.

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;