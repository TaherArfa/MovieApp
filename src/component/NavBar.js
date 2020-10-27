import React, { useState } from "react";
import ListMovie from "./ListeMovie";
import { Form, Button, Navbar, Nav, FormControl } from "react-bootstrap";
import ModalAddMovie from "./ModalAddMovie";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function NavBar({ handleGetText ,ratingValSearch}) {
  const [show, setShow] = useState(false);
  console.log("show", show);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  console.log("show///", show);

  let [ratingValSearch, setValue] = React.useState("");
  console.log("ratingValSearch",ratingValSearch)

  return (
    <div className="NavBarDiv">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MovieApp.com </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#film">Film</Nav.Link>
          <Nav.Link href="#eerie">Série</Nav.Link>
        </Nav>
        <Box className="ratingSearch" component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"> </Typography>
        <Rating
          name="simple-controlled"
          value={ratingValSearch}
          onChange={(event, ratingValSearch) => {
            setValue(ratingValSearch);
          }}
        />
      </Box>

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => handleGetText(e.target.value)}
          />
          <Button variant="outline-info">Search</Button>

          <Button variant="outline-info" onClick={handleShow}>
            Add New Movie{" "}
          </Button>
          <ModalAddMovie show={show} handleClose={handleClose} />
        </Form>
      </Navbar>
    </div>
  );
}
