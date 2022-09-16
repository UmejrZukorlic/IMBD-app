import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context";
import "./moviePage.css";
const MoviePage = () => {
  const [data, setData] = useState();
  const [broj] = useState(1);

  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/MostPopularMovies/k_1p4c9h6h")
      .then((respone) => {
        console.log(respone.data);
        setData(respone.data.items);
      });
  }, [broj]);
  const { setIdentity } = useContext(MovieContext);
  return (
    <Layout>
      <div className="MoviePageSection">
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
    </Layout>
  );
};

export default MoviePage;
