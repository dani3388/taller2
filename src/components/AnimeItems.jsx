import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import ShorMore from "./ShorMore";

const AnimeItems = ({ anime }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={anime.image_url} height="300" />
      <Card.Body>
        <Card.Title>{anime.title}</Card.Title>
        <Container>
          <Row className="justify-content-md-center">
            <ShorMore sinopsis={anime.synopsis} />
          </Row>
          <Row className="justify-content-md-center">
            <a href={anime.url} variant="dark" target="blank">
              MyAnimeList
            </a>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default AnimeItems;
