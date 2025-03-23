const express = require("express");
const {
  createSession,
  successPayment,
  cancelPayment,
  getCheckoutSession,
} = require("../controllers/paymentController.js");
const paymentRoutes = express.Router();

paymentRoutes.post("/create-checkout-session", createSession);

paymentRoutes.get("/checkout-session/:session_id", getCheckoutSession);

paymentRoutes.get("/success", successPayment);

paymentRoutes.get("/cancel", cancelPayment);

module.exports = paymentRoutes;