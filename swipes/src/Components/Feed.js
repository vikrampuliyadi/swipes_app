import React, { useEffect, useState } from "react";
import axios from "axios";
import SocialMediaPost from "./SocialMediaPost";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [selectedDiningHall, setSelectedDiningHall] = useState("");

  const handleFilterClick = () => {
    const filteredPosts = posts.filter(
      (post) => post.diningHall === selectedDiningHall
    );
    console.log(filteredPosts);
  };

  const handleDiningHallSelect = (event) => {
    setSelectedDiningHall(event.target.value);
  };

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
      <label htmlFor="dining-hall-select">Select a dining hall:</label>
      <select
        id="dining-hall-select"
        value={selectedDiningHall}
        onChange={handleDiningHallSelect}
        style={{ width: "200px" }}
      >
        <option value="">All</option>
        <option value="ASUCLA Ticket">ASUCLA Ticket</option>
        <option value="BCafe">BCafe</option>
        <option value="BPlate">BPlate</option>
        <option value="De Neve">De Neve</option>
        <option value="Epicuria">Epicuria</option>
        <option value="Feast">Feast</option>
        <option value="Food Truck Ticket">Food Truck Ticket</option>
        <option value="Epicuria at Ackerman">Epicuria at Ackerman</option>
        <option value="Rende East">Rende East</option>
        <option value="Rende West">Rende West</option>
        <option value="The Drey">The Drey</option>
        <option value="The Study">The Study</option>
      </select>

      {posts
        .filter(
          (post) =>
            selectedDiningHall === "" || post.diningHall === selectedDiningHall
        )
        .map((post) => (
          <SocialMediaPost
            key={post.id}
            email={post.email}
            fullname={post.fullname}
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
