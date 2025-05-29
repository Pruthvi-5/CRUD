const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const Order = require("../models/Order");

// Simulated payment and order placement
router.post("/", async (req, res) => {
  const { bookId, quantity } = req.body;

  try {
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    const totalPrice = book.price * quantity;

    // Simulate payment success
    const order = new Order({
      book: book._id,
      quantity,
      totalPrice,
    });

    await order.save();

    res.json({ success: true, message: "Order placed successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Order failed." });
  }
});

module.exports = router;
