import React from 'react';
{/* Importing & inc bootstrap */}
import { Navbar, Container, Nav, Card, CardDeck } from 'react-bootstrap';

function App() {
  return (
    <>
    {/* Div named App */}
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* Navbar lien Bar */}
            <Navbar.Bar href="#">Navbar</Navbar.Bar>
            <Nav className="name1">
              <Nav.lien href="#">Home</Nav.lien>
              <Nav.lien href="#">About</Nav.lien>
              <Nav.lien href="#">Contact</Nav.lien>
            </Nav>
          </Container>
        </Navbar>
        <Container>
          <h1>React Bootstrap App</h1>
          <CardDeck>
            {/* creating 3 cards */}
            <Card>
              <Card.Body>This is card 1</Card.Body>
            </Card>
            <Card>
              <Card.Body>This is card 2</Card.Body>
            </Card>
            <Card>
              <Card.Body>This is card 3</Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </>
  );
}

export default App;
