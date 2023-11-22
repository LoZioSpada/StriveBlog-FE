import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

export default function BlogAuthor (){
  const [authors, setAuthors] = useState([])

  const makeAPICall = async () => {
    try{
      const response = await fetch(
        `http://localhost:3030/api/authors/655cf4c77a4e03b9930a90e8`
      )

      if(!response.ok){
        throw new Error(`HTTP ERROR! Status: ${response.status}`)
      }

      const data = await response.json()
      setAuthors(data)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    makeAPICall()
  }, [])

  return (
    <Row>
      <Col xs={"auto"} className="pe-0" key={authors._id}>
        <Image className="blog-author" src={authors.avatar} roundedCircle />
      </Col>
      <Col>
        <div>di</div>
        <h6>{authors.name} {authors.surname}</h6>
      </Col>
    </Row>
  );
};