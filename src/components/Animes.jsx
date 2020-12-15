import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimeItems from "./AnimeItems";


const Animes = ({animes}) => {
    return (
        <Container>
            <Row>
                {animes.map((anime,index)=>(
                    <Col key={index} sm={4} className="my-2">
                        <AnimeItems anime={anime}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Animes
