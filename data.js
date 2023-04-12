import express from 'express';

import Crypto from 'crypto';

import Account from '../Schema/account.js';

const handleGet = async (req, res) => {
  try {
    const { body } = req;
    console.log({ body });
    const data = await Account.find().populate('acc');
    return res.status(201).json(data);
  } catch (err) {
    return { error: err.message };
  }
};

const handlepostReg = async (req, res) => {
  try {
    const { body } = req;
    console.log({ body });
    const data = await Account.create(req.body);

    const Pin = (size = 21) => {
      return Crypto.randomBytes(size).toString('base64').slice(0, size);
    };
    console.log(Pin());

    return res.status(201).json(data);
  } catch (e) {
    console.log(e.message);
  }
};

const handleput = async (req, res) => {
  try {
    const { _id, money } = req.body;
    const data = await Account.findByIdAndUpdate(_id, {
      $inc: {
        balance: money,
      },
    });

    return res.status(201).json(data);
  } catch (err) {
    return { error: err.message };
  }
};

export { handlepostReg, handleGet, handleput };
