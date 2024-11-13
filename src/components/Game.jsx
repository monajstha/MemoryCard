import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Game() {
  const data = [
    {
      id: 1,
      name: "Ronaldo",
    },
    {
      id: 2,
      name: "Messi",
    },
    {
      id: 3,
      name: "Neymar",
    },
    {
      id: 4,
      name: "Henry",
    },
  ];
  const [playersGuess, setPlayersGuesses] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [footballPlayers, setFootballPlayers] = useState(data);

  //   Shuffle the football player's data
  const shuffleData = (data) => {
    let arr = data.slice(0);
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // shuffle the data on first render and when the values in playersGuess change
  useEffect(() => {
    setFootballPlayers(shuffleData(data));
  }, [playersGuess]);

  const handleCardClick = (item) => {
    if (playersGuess.map((entry) => entry.id).includes(item?.id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setPlayersGuesses([]);
    } else {
      setScore(score + 1);
      setPlayersGuesses([...playersGuess, item]);
    }
  };

  console.log({ playersGuess });

  return (
    <div>
      Score: {score}
      Best Score: {bestScore}
      {footballPlayers.map((item) => (
        <Card key={item.id} data={item} onClick={() => handleCardClick(item)} />
      ))}
    </div>
  );
}
