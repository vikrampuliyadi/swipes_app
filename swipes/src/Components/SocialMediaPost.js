import React from "react";

function SocialMediaPost({
  author,
  content,
  timestamp,
  price,
  diningHall,
  paymentType,
  date,
  contact,
}) {
  return (
    <div className="post-container">
      <div className="post-element post-author">{author}</div>
      <div className="post-element post-timestamp">{timestamp}</div>
      <div className="post-element post-swipe-price">Price: ${price}</div>
      <div className="post-element post-dining-hall">
        Dining Hall: {diningHall}
      </div>
      <div className="post-element post-payment-type">
        Payment Type: {paymentType}
      </div>
      <div className="post-element post-request-date">
        Buying swipe for: {date}
      </div>
      <div className="post-element post-content">{content}</div>
      <div className="post-element post-contact">Contact: {contact}</div>
      <button classname="accept-btn">Accept</button>
    </div>
  );
}

export default SocialMediaPost;
