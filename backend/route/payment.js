// backend/routes/payment.js
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { cardNumber, nameOnCard, expiry, cvv, amount } = req.body;

  // Simulate card validation and fake payment success
  if (cardNumber && nameOnCard && expiry && cvv && amount > 0) {
    return res.json({ success: true, message: "Payment processed successfully." });
  }

  return res.status(400).json({ success: false, message: "Invalid payment data." });
});

module.exports = router;
