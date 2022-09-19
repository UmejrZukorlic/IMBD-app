import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./landingPage.css";
import { useContext } from "react";
import { MovieContext } from "../context";
import Layout from "../Layout";
import Card from "../Card";
const LandingPage = () => {
  const [data, setData] = useState();
  const [broj] = useState(1);

  const { setIdentity } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_1p4c9h6h")
      .then((respone) => {
        console.log(respone.data);
        setData(respone.data.items);
      });
  }, [broj]);

  return (
    <Layout>
      <div className="PageSection">
        {data?.map((el, i) => {
          return (
            <Card
              id={el.id}
              image={el.image}
              title={el.title}
              year={el.year}
              rank={el.rank}
              imDbRating={el.imDbRating}
              key={i}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default LandingPage;
