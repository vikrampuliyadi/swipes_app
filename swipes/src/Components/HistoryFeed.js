import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionPost from "./TransactionPost";

function HistoryFeed() {
  const [posts, setPosts] = useState([]);

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

  const getEmail = async() => {
    const userEmail = await getUserEmail();
    return userEmail;
  }

  useEffect(() => {
    const getEmailAndFetchPosts = async () => {
      const userEmail = await getEmail();
      axios
        .get("http://localhost:3000/posts/accepted/email", {
          params: {
            email: userEmail
          }
        })
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    
    getEmailAndFetchPosts();
  }, []);
  
  return (
    <div>
      {posts.map((post) => (
        <TransactionPost
          key={post.id}
          email={post.email}
          diningHall={post.diningHall}
          date={post.date}
          price={post.price}
          timestamp={post.timestamp}
          paymentType={post.paymentType}
          contactInfo={post.contactInfo}
          message={post.message}
          accepted={post.accepted}
        />
      ))}
    </div>
  );
}

export default HistoryFeed;
