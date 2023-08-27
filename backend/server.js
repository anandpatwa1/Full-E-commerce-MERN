const express = require('express');
const { connectDB } = require('./config/db');
const { errorHandler } = require('./middleWere/errorMiddlewere');
const app = express();
require('dotenv').config();
require('colors');

const PORT = process.env.PORT || 5000;

//DataBase connection
connectDB();
//body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Wellcome to E-commerce');
});

//Routes
app.use('/api/user', require('./Routes/userRoute'));
app.use('/api/admin', require('./Routes/adminRoute'));
app.use('/api/product', require('./Routes/productRoute'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at PORT :- ${PORT}`);
});
