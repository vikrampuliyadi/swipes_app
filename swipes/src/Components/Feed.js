import React, { useEffect, useState } from "react";
import axios from "axios";
import SocialMediaPost from "./SocialMediaPost";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/accepted/false")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <SocialMediaPost
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

export default Feed;
