import React from "react";
// import data from "../Data";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function MovieCard(Movie) {
  //   console.log("data");
  //   console.log("MovieObj", movie);
  const [value, setValue] = React.useState(Movie.rating);
  console.log("movie.Rating",Movie)
  return (
    <div className="wrapper">
      {/* {MovieObj.map((movie) => ( */}
      <Card style={{ width: "16rem" }}>
        <Card.Img
          className="PosterURLCls"
          variant="top"
          src={Movie.posterURL}
        />
        <Card.Body>
          <Card.Title className="text-muted titleCls">{Movie.title}</Card.Title>
          <Card.Text className="text-muted descripCls">
            {Movie.description}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          <div className="ratingDiv">
            {/* <Button variant="outline-info">Search</Button> */}
            
              <Box component="fieldset" mb={3} borderColor="transparent">
                {/* <Typography component="legend">Read only</Typography> */}
                <Rating name="read-only" value={value} readOnly />
              </Box>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default MovieCard;
MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  posterURL: PropTypes.string,
  rating: PropTypes.number,
};
