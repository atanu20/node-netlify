const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://atanumongo:atanumongo@firstmongoapp.dgqpo.mongodb.net/online_netlify?retryWrites=true&w=majority',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connection done');
  })
  .catch((e) => {
    console.log('something error');
  });
