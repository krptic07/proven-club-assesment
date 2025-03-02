import React from "react";
import Board from "../../components/Board";

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        maxHeight: "100vh",
        maxWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Board />
    </div>
  );
};

export default HomePage;
