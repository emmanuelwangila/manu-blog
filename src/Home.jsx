import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("manu");
  const [age, setAge] = useState(10);

  const handleClick = () => {
    setName("kijana-wamalwa");
    setAge(48);
  };

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        padding: "10px",
        color: "blue",
        fontSize: "30px",
      }}
    >
      HomePage
      <p>
        {" "}
        {name} is {age} years{" "}
      </p>
      <button onClick={handleClick}> Click Buana</button>
    </div>
  );
};

export default Home;
