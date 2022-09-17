import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const { setIdentity } = useContext(MovieContext);
  const { id, image, title, year, rank, imDbRating, index } = props;
  return (
    <div key={index} className="movieCard">
      <img src={image} alt="slika" />
      <h1>{title}</h1>
      <h3>Relase year: {year}</h3>
      <h3>Rank: {rank}.</h3>
      <p>Rating: {imDbRating}</p>
      <Link to="/titlePage">
        <button
          onClick={() => {
            setIdentity(id);
          }}>
          See more
        </button>
      </Link>
    </div>
  );
};

export default Card;
