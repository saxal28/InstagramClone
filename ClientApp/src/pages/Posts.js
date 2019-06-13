import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    height: 200,
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
};

export const PostsPage = () => {
  let [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/48")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDogs(data.message);
      });
  }, []);

  return (
    <Grid container spacing={3}>
      {dogs.map(dog => (
        <Grid item xs={3} key={dog}>
          <Card style={{background: `url(${dog})`, ...styles.card}} />
        </Grid>
      ))}
    </Grid>
  );
};
