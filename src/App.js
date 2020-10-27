import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
// import MovieCard from "./component/MovieCard";
import Navbar from "./component/NavBar";
import ListeMovie from "./component/ListeMovie";

function App() {
  const [Movie, SetMovie] = React.useState(Data);
  const [text, setText] = useState("");
  const searchText = (text) => {
    console.log(text);
    setText(text);
  };

  // const [show, setShow] = React.useState(false);
  // // set the new movie
  // const [newMovie, SetNewMovie] = React.useState({
  //   title: "",
  //   description: "",
  //   rating: "",
  //   posterURL: "",
  // });

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handleSave = () => {
  //   SetMovie([...Movie, newMovie]);
  //   // SetMovie(Movie.concat(newMovie));
  //   setShow(false);
  // };

  // const handleSaveNewMovie = (e) => {
  //   console.log("zzzzz", { [e.target.name]: e.target.value });
  //   SetNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  // };

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <MovieCard /> */}
      <Navbar handleGetText={searchText} />
      <ListeMovie text={text} Movie={Movie} />

    </div>
  );
}

export default App;
