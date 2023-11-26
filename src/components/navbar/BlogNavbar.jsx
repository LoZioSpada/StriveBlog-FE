import React from "react";
import { Button, Col, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";


const NavBar = (props) => {

  const { query, setQuery, setResult } = props;

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3030/blogPosts?title=${query}`)
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json()
      setResult(data.blogPosts)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <Col xs={6} md={4} className='me-2 mb-4'>
          <Navbar.Brand as={Link} to="/">
            <img className="blog-navbar-brand" alt="logo" src={logo} />
          </Navbar.Brand>
        </Col>

        <Col md={4} xs={{ span: 12, order: 2 }} className="order-sm-2">
          <Form className="d-flex">
            <Form.Control
              type="text"
              value={query}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)}
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Col>

        <Col xs={5} md={{ span: 1, order: 2 }}>
          <Button as={Link} to="/new" className="blog-navbar-add-button bg-dark" size="lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Nuovo Articolo
          </Button>
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavBar;
