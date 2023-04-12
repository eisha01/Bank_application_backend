import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

const loginschema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

loginschema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = bcrypt.hash(this.password, salt);
  console.log(this.password);
  next();
});
const Login = mongoose.model('Login', loginschema);

export default Login;
