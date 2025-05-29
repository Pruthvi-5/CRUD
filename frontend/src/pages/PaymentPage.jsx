// src/pages/PaymentPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();
    setMessage("");

    // Simulated payment API call
    try {
      const res = await axios.post("http://localhost:5000/api/payment", {
        cardNumber,
        nameOnCard,
        expiry,
        cvv,
        amount,
      });

      if (res.data.success) {
        setMessage("Payment Successful!");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setMessage("Payment Failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Try again.");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name on Card"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Pay</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PaymentPage;
