import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./landingPage.css";
import { useContext } from "react";
import { MovieContext } from "../context";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [data, setData] = useState();
  const [broj, setBroj] = useState(1);

  const { identity, setIdentity } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_1p4c9h6h")
      .then((respone) => {
        console.log(respone.data);
        setData(respone.data.items);
      });
  }, [broj]);

  return (
    <div className="landingPageSection">
      {data?.map((el, i) => {
        return (
          <div key={el.id} className="movieCard">
            <img src={el.image} alt={i} />
            <h1>{el.title}</h1>
            <h3>Relase year: {el.year}</h3>
            <h3>Rank: {el.rank}.</h3>
            <p>Rating: {el.imDbRating}</p>
            <Link to="/titlePage">
              <button
                onClick={() => {
                  setIdentity(el.id);
                }}>
                See more
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
