import React from "react";
import { Button, Form } from "react-bootstrap";
import useSelect from "../hooks/useSelect";

const Formulario = ({setGenre}) => {
  const options = [
    { id: 1, label: "Action" },
    { id: 2, label: "Adventure" },
    { id: 3, label: "Cars" },
    { id: 4, label: "Comedy" },
    { id: 5, label: "Dementia" },
    { id: 6, label: "Demons" },
    { id: 7, label: "Mystery" },
    { id: 8, label: "Drama" },
    { id: 9, label: "Ecchi" },
    { id: 10, label: "Fantasy" },
    { id: 11, label: "Game" },
    { id: 35, label: "Harem" },
    { id: 12, label: "Hentai" },
    { id: 13, label: "Historical" },
    { id: 14, label: "Horror" },
    { id: 43, label: "Josei" },
    { id: 15, label: "Kids" },
    { id: 16, label: "Magic" },
    { id: 17, label: "Martial Arts" },
    { id: 18, label: "Mecha" },
    { id: 38, label: "Military" },
    { id: 19, label: "Music" },
    { id: 20, label: "Parody" },
    { id: 39, label: "Police" },
    { id: 40, label: "Psychological" },
    { id: 22, label: "Romance" },
    { id: 21, label: "Samurai" },
    { id: 23, label: "School" },
    { id: 24, label: "Sci-Fi" },
    { id: 42, label: "Seinen" },
    { id: 25, label: "Shoujo" },
    { id: 26, label: "Shoujo Ai" },
    { id: 27, label: "Shounen" },
    { id: 28, label: "Shounen Ai" },
    { id: 36, label: "Slice of Life" },
    { id: 29, label: "Space" },
    { id: 30, label: "Sports" },
    { id: 31, label: "Super Power" },
    { id: 37, label: "Supernatural" },
    { id: 41, label: "Thriller" },
    { id: 32, label: "Vampire" },
    { id: 33, label: "Yaoi" },
    { id: 34, label: "Yuri" },
  ];
  const [genre, SelectGenre] = useSelect(
    "1",
    options,
    "Seleccionar Género"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setGenre(genre);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group >
        <SelectGenre />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default Formulario;
