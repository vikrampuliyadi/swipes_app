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
    <div>
    <div className="body">
    <div className="cards">
      <div className="card">
        <div className="content">
          <h2 className="post-element post-author">{author}</h2>
          <p className="post-element1 post-contact">Contact: {contact}</p>
          <p className="post-element1 post-timepstamp">{timestamp}</p>
        </div>
        <div className="image">
          <div>
            <h4 className="post-element2 post-content">{content}</h4>
          </div>
        </div>
        <div className="content2">
          <div class = "grid">
            <h4 className="post-element post-dining-hall">Dining Hall: {diningHall}</h4>
            <h4 className="post-element post-request-date">Buying swipe for: {date}</h4>
            <h4 className="post-element post-swipe-price">Price: ${price}</h4>
            <h4 className="post-element post-payment-type">Payment Type: {paymentType}</h4>
          </div>
          <button classname="accept-btn">Accept</button>
        </div>
      </div>
      {/* <div className="card">
        <div className="content">
          <h2>Ryan</h2>
          <p>ryantherealperson@gmail.com</p>
        </div>
        <div className="image">
          <img src="https://via.placeholder.com/300x200" alt="placeholder" />
        </div>
        <div className="content2">
          <div class = "grid">
            <h4>Dining Hall: Feast</h4>
            <h4>Buying swipe for: Wednesday 11:30-12:30 pm</h4>
            <h4>Price: $8</h4>
            <h4>Payment type: Venmo</h4>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  </div>
  );
}

export default SocialMediaPost;