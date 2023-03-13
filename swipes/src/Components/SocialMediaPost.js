import React from "react";
import axios from "axios";

function SocialMediaPost({
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
  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length);
      }
    }
    return null;
  };

  const token = getTokenFromCookies();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    },
  };

  const getUserEmail = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/users/api/user",
        config
      );
      const email = response.data.email;
      return email;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data;
        const postToUpdate = posts.find(
          (post) => post.message === message && post.email === email
        );
        const postId = postToUpdate._id;
        const newAcceptedValue = getUserEmail();
        axios
          .put(`/posts/${postId}/update-accepted`, {
            accepted: newAcceptedValue,
          })
          .then((response) => {
            console.log(response.data); // logs "Post accepted field updated successfully"
          })
          .catch((error) => {
            console.error(error);
            console.log("error");
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
      <button classname="accept-btn" onSubmit={handleSubmit}>
        Accept
      </button>
    </div>
  );
}

export default SocialMediaPost;
