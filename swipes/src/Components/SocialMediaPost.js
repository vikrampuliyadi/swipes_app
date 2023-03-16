import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SocialMediaPost({
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
  let navigate = useNavigate();
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
      console.log("user email error");
      console.error(error);
      return ""; // return an empty string in case of error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmail = await getUserEmail();
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        const posts = response.data;
        const postToUpdate = posts.find(
          (post) => post.message === message && post.email === email
        );
        const postId = postToUpdate._id;
        const newAcceptedValue = newEmail;
        axios
          .put(`http://localhost:3000/posts/${postId}/update-accepted`, {
            email: newAcceptedValue,
          })
          .then((response) => {
            console.log(response.data); // logs "Post accepted field updated successfully"
            navigate("/Profile");
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
    //CORRECT CSS AND STYLING
    <div>
      <div className="body">
        <div className="cards">
          <div className="card">
            <div className="content">
              <h2 className="post-element post-author">{fullname}</h2>
              <p className="post-element1 post-contact">
                Contact: {contactInfo}
              </p>
              <p className="post-element1 post-timepstamp">{timestamp}</p>
            </div>
            <div className="image">
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
                  Time/Date: {date}
                </h4>
                <h4 className="post-element post-swipe-price">
                  Price: ${price}
                </h4>
                <h4 className="post-element post-payment-type">
                  Payment Type: {paymentType}
                </h4>
              </div>
              <div className="accept-cont">
                <button className="accept-btn" onClick={handleSubmit}>
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaPost;
