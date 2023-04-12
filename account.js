import mongoose from 'mongoose';

const acountschema = mongoose.Schema({
  acount_number: Number,
  owner: String,
  balance: Number,
  pin: String,
  acc: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Login',
  },
});

const Account = mongoose.model('Account', acountschema);

export default Account;
