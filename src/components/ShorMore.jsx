import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";

const ShorMore = ({sinopsis}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Sinopsis
      </Button>
      <Collapse in={open}>
        <Card.Text>{sinopsis}</Card.Text>
      </Collapse>
    </>
  );
};

export default ShorMore;
