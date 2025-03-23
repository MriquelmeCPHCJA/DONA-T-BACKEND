// Importa los modelos de Cart y User
const Cart = require("../models/Cart");
const User = require("../models/User");

// Importa los modelos de Cart y User
const Cart = require("../models/Cart");
const User = require("../models/User");

// Función para crear un carrito
exports.createCart = async (req, res) => {
  // Crea un carrito con los datos de la solicitud
  const newCart = await Cart.create(req.body);

  // Envía el nuevo carrito en la respuesta
  res.json({
    cart: newCart,
  });
};

// Función para obtener un carrito
exports.getCart = async (req, res) => {
  // Obtiene el ID del usuario de la solicitud
  const userID = req.user.id;

  // Encuentra al usuario en la base de datos por su ID
  const foundUser = await User.findOne({ _id: userID });

  // Encuentra el carrito del usuario en la base de datos
  const foundCart = await Cart.findOne({ _id: foundUser.cart });

  // Envía el carrito encontrado en la respuesta
  res.json({
    cart: foundCart,
  });
};

// Función para editar un carrito
exports.editCart = async (req, res) => {
  // Obtiene el ID del usuario de la solicitud
  const userID = req.user.id;

  // Encuentra al usuario en la base de datos por su ID
  const foundUser = await User.findOne({ _id: userID });

  // Toma los nuevos datos de los productos de la solicitud
  const { products } = req.body;

  // Actualiza el carrito con los nuevos datos de los productos
  const updatedCart = await Cart.findByIdAndUpdate(
    foundUser.cart,
    {
      products,
    },
    { new: true }
  );

  // Envía un mensaje y el carrito actualizado en la respuesta
  res.json({
    msg: "Tu carrito fue actualizado",
    updatedCart,
  });
};
