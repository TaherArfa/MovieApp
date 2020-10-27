import React from "react";
import MovieCard from "./MovieCard";
import { Form, Button, Navbar, Nav, FormControl, Modal } from "react-bootstrap";

export default function ListeMovie({ text, Movie }) {
  console.log("MovieMovie", Movie);
  //get the table of object
  console.log("Movie", Movie);
  //   console.log("Movie.concat(newMovie)",Movie.concat(newMovie))
  return (
    <div>
      <div className="NavBar ">
        <div></div>
      </div>
      <div className="wrapper">
        {Movie.filter((el) =>
          el.title.toUpperCase().includes(text.toUpperCase())
        ).map((movie) => (
          <MovieCard
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
