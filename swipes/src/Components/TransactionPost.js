import React from "react";
import axios from "axios";

function TransactionPost({
  key,
  email,
  diningHall,
  date,
  price,
  timestamp,
  paymentType,
  contactInfo,
  message,
  accepted,
}) {
  return (
    <div className="post-container">
      <div className="post-element post-author">{email}</div>
      <div className="post-element post-timestamp">{timestamp}</div>
      <div className="post-element post-dining-hall">
        Dining Hall: {diningHall}
      </div>
      <div className="post-element post-swipe-price">Price: ${price}</div>
      <div className="post-element post-request-date">
        Buying swipe for: {date}
      </div>
      <div className="post-element post-payment-type">
        Payment Type: {paymentType}
      </div>
      <div className="post-element post-content">{message}</div>
      <div className="post-element post-contact">Contact: {contactInfo}</div>
    </div>
  );
}

export default TransactionPost;
