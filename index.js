import express from 'express';
const app = express();
import connect from './connection.js';
import data from './routes/data.js';
import personacc from './routes/personacc.js';

const port = process.env.PORT || 3000;

try {
  app.use('/Account', data);
  app.use('/data', personacc);

  connect();

  app.listen(port, () => {
    console.log(`connected to ${port}`);
  });
} catch (e) {
  console.log(e.message);
}
