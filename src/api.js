const express = require('express');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
const cors = require('cors');
var router = express.Router();
const PORT = process.env.PORT || 8000;
require('./db/config');
const userDetailsTable = require('./models/userDetails');

const app = express();
app.use(cors());
app.use(express.json());

router.get('/', (req, res) => {
  res.send('hii');
});
router.post('/add', async (req, res) => {
  const usedet = new userDetailsTable({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const resu = await usedet.save();
    res.send(resu);
  } catch (err) {
    console.log(err);
  }
});
router.get('/getdata', async (req, res) => {
  userDetailsTable.find({}, (err, result) => {
    if (err) {
      res.json({ status: false, msg: 'something wrong' });
    } else {
      res.send(result);
    }
  });
});
router.get('/getdata/:id', async (req, res) => {
  const id = req.params.id;
  userDetailsTable.findById({ _id: id }, (err, result) => {
    if (err) {
      res.json({ status: false, msg: 'something wrong' });
    } else {
      res.send(result);
    }
  });
});

router.post('/postdata/:id', async (req, res) => {
  const id = req.params.id;
  userDetailsTable.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
    },
    (err, result) => {
      if (err) {
        res.json({ status: false, msg: 'something wrong' });
      } else {
        res.send(result);
      }
    }
  );
});

router.delete('/deletedata/:id', async (req, res) => {
  const id = req.params.id;
  userDetailsTable.findByIdAndRemove({ _id: id }, (err, result) => {
    if (err) {
      res.json({ status: false, msg: 'something wrong' });
    } else {
      res.send({ msg: 'data deleted' });
    }
  });
});

// app.use(router)

// app.listen(PORT,()=>{
//     console.log(`App running on ${PORT}`)
// })
// "build": "netlify deploy --prod",
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
