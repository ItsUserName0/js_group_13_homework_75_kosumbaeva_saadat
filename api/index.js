const express = require('express');
const cors = require('cors');
const {Cipher, Decipher} = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

app.post('/encode', (req, res, next) => {
  try {
    if (!req.body.password || !req.body.message) {
      return res.status(404).send({message: 'Password and message are required!'});
    }
    const encodedText = Cipher(req.body.password).crypt(req.body.message);
    return res.send({encoded: encodedText});
  } catch (e) {
    next(e);
  }
});
app.post('/decode', (req, res, next) => {
  try {
    if (!req.body.password || !req.body.message) {
      return res.status(404).send({message: 'Password and message are required!'});
    }
    const decodedText = Decipher(req.body.password).crypt(req.body.message);
    return res.send({decoded: decodedText});
  } catch (e) {
    next(e);
  }
});

app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});