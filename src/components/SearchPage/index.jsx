import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MovieContext } from "../context";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [data, setData] = useState();

  const { setIdentity, titleName } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Search/k_1p4c9h6h/${titleName}`)
      .then((respone) => {
        console.log(respone.data);
        setData(respone.data.results);
      });
  }, [titleName]);
  return (
    <Layout>
      <div className="landingPageSection">
        {data?.map((el, i) => {
          return (
            <div key={el.id} className="movieCard">
              <img src={el.image} alt={i} />
              <h1>{el.title}</h1>
              {el.year && <h3>Relase year: {el.year}</h3>}
              {el.rank && <h3>Rank: {el.rank}.</h3>}
              {el.imDbRating && <p>Rating: {el.imDbRating}</p>}
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

export default SearchPage;
