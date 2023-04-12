import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Bank').then(() => {
      console.log(`successfully connected `);
    });
  } catch (e) {
    console.log(e.message);
  }
};

export default connect;
