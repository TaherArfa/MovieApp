import React ,{useState} from "react";
import { Form, Button, FormControl, Modal } from "react-bootstrap";
import Data from "../Data";
import PropTypes from "prop-types";

function ModalAddMovie() {

    
  //const [show, setShow] = React.useState(false);
  // set the new movie
  const [Movie, setMovie ] = React.useState(Data);
console.log("Movie",Movie)
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    rating: "",
    posterURL: "",
  });

  // const handleShow = () => setShow(true);

  const handleSave = () => {
    setMovie([...Movie, newMovie]);
    // SetMovie(Movie.concat(newMovie));
   // setShow(false);
  };
  

  const handleSaveNewMovie = (e) => {
    console.log("zzzzz", { [e.target.name]: e.target.value });
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onClick={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormControl
              name="title"
              type="text"
              placeholder="Title"
              className="mr-sm-2 TextFiled"
              onChange={handleSaveNewMovie}
            />
            <FormControl
              name="description"
              type="text"
              placeholder="Description"
              className="mr-sm-2 TextFiled"
              onChange={handleSaveNewMovie}
            />
            <FormControl
              name="posterURL"
              type="text"
              placeholder="PosterURL"
              className="mr-sm-2 TextFiled"
              onChange={handleSaveNewMovie}
            />
            <FormControl
              name="rating"
              type="text"
              placeholder="Rating"
              className="mr-sm-2 TextFiled"
              onChange={handleSaveNewMovie}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={()=>handleClose()}>
            Close
          </Button>
          <Button variant="outline-info" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalAddMovie.propTypes={
  handleClose: PropTypes.func.isRequired
}
export default ModalAddMovie;