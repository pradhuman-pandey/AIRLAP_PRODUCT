import {compare, genSalt, hash} from 'bcryptjs';
import {Schema, model} from 'mongoose';

const tokenSchema = new Schema(
    {
      key: {type: String, require: true, uniques: true},
    },
    {timestamps: {createdAt: 'created'}},
);

const userSchema = new Schema({
  email: {type: String, require: true, unique: true},
  firstName: {type: String, require: true},
  lastName: {type: String, require: true},
  password: {type: String, require: true},
  isAdmin: {type: Boolean, require: false, default: false},
  isActive: {type: Boolean, require: true, default: true},
  lastLogin: {type: Date, require: false},
  token: {type: tokenSchema, require: false},
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await genSalt(10);
    const hassedPassword = await hash(this.password, salt);
    this.password = hassedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.validatePassword = async function(candidatePassword) {
  const success = await compare(candidatePassword, this.password);
  return success;
};

const User = model('User', userSchema);
export default User;
