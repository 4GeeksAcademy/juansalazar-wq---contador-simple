import React from "react";
import SecondCounter from "./SecondCounter.jsx";

const Home = ({ seconds }) => {
  return (
    <div className="container-fluid text-center">
      <SecondCounter seconds={seconds} />
    </div>
  );
};

export default Home;
