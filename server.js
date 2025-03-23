const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryProductsRoutes');
const cartRoutes = require('./routes/cart');
const paymentRoutes = require('./routes/paymentRoutes');

const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/category',categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(port, () => {
    console.log(`Servidor API corriendo en ${port}`);
  });