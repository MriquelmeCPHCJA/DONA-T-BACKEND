const User = require("../models/User");
const Cart = require("../models/Cart");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const user = req.body;
    const { password } = user;
    const newCart = await Cart.create({});
    const salt = await bcryptjs.genSalt(13);
    const hashedPassword = await bcryptjs.hash(password, salt);
    user.password = hashedPassword;
    user.cart = newCart;
    const newUser = await User.create(user);
    const payload = { user: user.id };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token, newUser });
      }
    );
    console.log("este es el nuevo usuario", newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let foundUser = await User.findOne({ email });
    if (!foundUser)
      return res
        .status(404)
        .json({ message: "Usuario o Contraseña incorrecta" });
    const validPassword = await bcryptjs.compare(password, foundUser.password);
    if (!validPassword)
      return res
        .status(401)
        .json({ message: "Usuario o Contraseña incorrecta" });
    const payload = { user: foundUser.id };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    res.json({ message: "Hubo un error al iniciar sesión" });
  }
};

exports.verifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "Hubo un error al verificar el usuario" });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const idUser = req.params.id;
    const user = req.body;
    if (user.password) {
      const { password } = user;
      const salt = await bcryptjs.genSalt(13);
      const hashedPassword = await bcryptjs.hash(password, salt);
      user.password = hashedPassword;
    }
    const updatedUser = await User.findByIdAndUpdate(idUser, user, {
      new: true,
    });
    res.json({ updatedUser });
  } catch (error) {
    res.status(400).json({ message: "Hubo un error al actualizar el usuario" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: "Hubo un error al obtener los usuarios" });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const idUser = req.params.id;
    await User.findByIdAndDelete(idUser);
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(400).json({ message: "Hubo un error al eliminar el usuario" });
  }
};
