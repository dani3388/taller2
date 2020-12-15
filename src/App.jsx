import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Animes from "./components/Animes";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import {BASE_URL} from "./utils/api"

const App = () => {
  const [genre, setGenre] = useState("");
  const [animes, setanimes] = useState([]);

useEffect(() => {
  console.log(genre);
  const searchAnimes = async () => {
    const url = `${BASE_URL}/${genre}/1`;    
    const response = await fetch(url);
    const data = await response.json();
    setanimes(data.anime);
  };
  searchAnimes();
}, [genre])

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <Formulario setGenre={setGenre}/>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>
        <Row>
          <Col>
            <Animes animes={animes} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
