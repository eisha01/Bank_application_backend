import Login from '../Schema/login.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const handlePostSignup = async (req, res) => {
  try {
    const { body } = req;
    console.log({ body });
    const personacc = await Login.create(req.body);
    return res.status(201).json(personacc);
  } catch (err) {
    console.log(err);
  }
};

const handlePost = async (req, res) => {
  try {
    const email = req.body.email;

    const password = req.body.password;

    const personacc = await Login.findOne({ email });

    if (!personacc) {
      throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, personacc.password);

    const accessToken = jwt.sign({ personacc }, 'asd');

    res.status(201).json(accessToken);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export { handlePostSignup, handlePost };
