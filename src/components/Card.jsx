import React from "react";

export default function Card({ data, onClick }) {
  const { id, name, image } = data;
  return (
    <div onClick={onClick} key={id}>
      {name}
    </div>
  );
}
