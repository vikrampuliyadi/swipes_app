import React from "react";
import axios from "axios";

function TransactionPost({
  key,
  email,
  fullname,
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
    <div>
      <div className="body">
        <div className="cards">
          <div className="t-card">
            <div className="content">
              <h2 className="post-element post-author">{fullname}</h2>
              <p className="post-element1 post-contact">
                Contact: {contactInfo}
              </p>
              <p className="post-element1 post-timepstamp">{timestamp}</p>
            </div>
            <div className="t-image">
              <div>
                <h4 className="post-element2 post-content">{message}</h4>
              </div>
            </div>
            <div className="content2">
              <div class="grid">
                <h4 className="post-element post-dining-hall">
                  Dining Hall: {diningHall}
                </h4>
                <h4 className="post-element post-request-date">
                  When: {date}
                </h4>
                <h4 className="post-element post-swipe-price">
                  Price: ${price}
                </h4>
                <h4 className="post-element post-payment-type">
                  Payment Type: {paymentType}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionPost;
