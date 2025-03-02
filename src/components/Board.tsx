import React, { useState, useEffect } from "react";
import Card from "./Card";

const Board = () => {
  const [boardValues, setBoardValues] = useState(Array(9).fill("0"));
  const [gameTurn, setGameTurn] = useState(0);
  const [gameWon, setGameWon] = useState({ team: "", value: false });

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBotChance = () => {
    const emptyArray = boardValues.filter((element, index) =>
      element === "0" ? index : undefined
    );
    const emptyPositions = emptyArray.filter((ele) => ele || ele === 0);

    for (let pattern of winPatterns) {
      const [first, second, third] = pattern;
      if (boardValues[first] === "X") {
        if (boardValues[second] === "X" && boardValues[third] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(third, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
        if (boardValues[third] === "X" && boardValues[second] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(second, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
      } else if (boardValues[second] === "X") {
        if (boardValues[first] === "X" && boardValues[third] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(third, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
        if (boardValues[third] === "X" && boardValues[first] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(first, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
      } else if (boardValues[third] === "X") {
        if (boardValues[second] === "X" && boardValues[first] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(first, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
        if (boardValues[first] === "X" && boardValues[second] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(second, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
      } else if (boardValues[first] === "O") {
        if (boardValues[second] === "O" && boardValues[third] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(third, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
        if (boardValues[third] === "O" && boardValues[second] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(second, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
      } else if (boardValues[second] === "O") {
        if (boardValues[first] === "O" && boardValues[third] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(third, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
        if (boardValues[third] === "O" && boardValues[first] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(first, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
      } else if (boardValues[third] === "O") {
        if (boardValues[first] === "O" && boardValues[second] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(second, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
        if (boardValues[second] === "O" && boardValues[first] === "0") {
          let boardValuesCopy = boardValues;
          boardValuesCopy.splice(first, 1, "O");
          setBoardValues([...boardValuesCopy]);
          return;
        }
      } else {
        const randomInt = Math.floor(
          Math.random() * (emptyPositions.length - 1)
        );
        let boardValuesCopy = boardValues;
        boardValuesCopy.splice(randomInt, 1, "O");
        setBoardValues([...boardValuesCopy]);
        return;
      }
    }
  };

  useEffect(() => {
    if (gameTurn === 1 && !gameWon.value) {
      handleBotChance();
      setGameTurn(0);
    }
    for (let pattern of winPatterns) {
      const [first, second, third] = pattern;
      if (
        boardValues[first] !== "0" &&
        boardValues[first] &&
        boardValues[second] === boardValues[first] &&
        boardValues[first] === boardValues[third]
      ) {
        if (boardValues[first] === "X") {
          setGameWon({ team: "PLAYER", value: true });
          return;
        } else if (boardValues[first] === "O") {
          setGameWon({ team: "BOT", value: true });
          return;
        }
      }
    }

    if (!boardValues.includes("0")) {
      setGameWon({ team: "Draw", value: true });
      return;
    }
  }, [gameTurn, boardValues]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="grid grid-rows-3 grid-cols-3"
        style={{
          border: "3.7px solid #95E52E",
          borderRadius: "32.72px",
          padding: "8px",
          height: "548px",
          width: "548px",
          backgroundColor: "purple",
        }}
      >
        {boardValues.map((element, index) => {
          return (
            <div
              key={`${element}_${index}`}
              onClick={() => {
                if (gameTurn === 0 && !gameWon.value) {
                  let boardValuesCopy = boardValues;
                  boardValuesCopy.splice(index, 1, "X");

                  setBoardValues([...boardValuesCopy]);
                  setGameTurn(1);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card boardValues={boardValues} givenIndex={index} />
            </div>
          );
        })}
      </div>
      {gameWon.value && (
        <div
          style={{
            width: "100vw",
            margin: "50px 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >{`Game Won By: ${gameWon.team}`}</p>
        </div>
      )}
    </div>
  );
};

export default Board;
