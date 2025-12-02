import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <div>Home Page</div>
      {/* <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact Us</Link> */}
      <button onClick={goToAbout}>About</button>
    </>
  );
};

export default Home;
