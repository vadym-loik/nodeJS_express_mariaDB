const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: '.env-local' });

const PORT = process.env.PORT || '3000';

const app = express();

// middleweare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
  res.status(200).json({ name: 'Vadym', doing: 'Coding' });
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

// start listening
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
