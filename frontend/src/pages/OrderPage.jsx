// src/pages/OrderPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleOrder = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/orders", {
        bookId: selectedBookId,
        quantity,
      });

      if (res.data.success) {
        setMessage("Order placed and payment successful!");
      }
    } catch (err) {
      setMessage("Failed to place order.");
      console.error(err);
    }
  };

  return (
    <div className="order-container">
      <h2>Place Your Order</h2>
      <select onChange={(e) => setSelectedBookId(e.target.value)} value={selectedBookId}>
        <option value="">Select a Book</option>
        {books.map((book) => (
          <option key={book._id} value={book._id}>
            {book.title} - ${book.price}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        placeholder="Quantity"
      />
      <button onClick={handleOrder} disabled={!selectedBookId}>
        Pay & Order
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OrderPage;
