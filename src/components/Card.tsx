import React from "react";

interface ICardProps {
  boardValues: string[];
  givenIndex: number;
}

const Card = ({ boardValues, givenIndex }: ICardProps) => {
  return (
    <div
      style={{
        height: "162px",
        cursor: "pointer",
        width: "162px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${
          boardValues[givenIndex] !== "0" ? "#95E52E" : "#38005C"
        }`,
        borderRadius: "14px",
      }}
    >
      <p
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          color: "#38005C",
        }}
      >
        {boardValues[givenIndex] !== "0" ? boardValues[givenIndex] : ""}
      </p>
    </div>
  );
};

export default Card;
