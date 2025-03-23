const Stripe = require("stripe");
require("dotenv").config();
const Product = require("../models/Product");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createSession = async (req, res) => {
  const { nameProduct, descCorta, image, priceProduct, quantity } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "clp",
            product_data: {
              name: nameProduct,
              description: descCorta,
              images: [image],
            },
            unit_amount: priceProduct,
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${process.env.SUCCESS_URL}/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CANCEL_URL}`,
    });

    const sessionWithDetails = await stripe.checkout.sessions.retrieve(
      session.id,
      {
        expand: ["line_items"], // Expande line_items para obtener detalles del producto
      }
    );

    return res.json(sessionWithDetails); // Envía la sesión completa al frontend
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return res.status(500).json({ error: "Failed to create session" });
  }
};

exports.successPayment = (req, res) => {
  res.send("Success Route");
};

exports.cancelPayment = (req, res) => {
  res.send("Cancel Route");
};

exports.getCheckoutSession = async (req, res) => {
  const { session_id } = req.params;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items"], // Expande line_items para obtener detalles del producto
    });

    res.json(session);
  } catch (error) {
    console.error("Error retrieving Stripe session:", error);
    res.status(500).json({ error: "Failed to retrieve session" });
  }
};
