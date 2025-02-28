import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import "./NewsCarousel.css";

const newsData = [
  {
    date: "19",
    month: "NOV",
    year: "2015",
    bdColor: "#f05a28",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
  {
    date: "15",
    month: "DEC",
    year: "2015",
    bdColor: "#000000",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
  {
    date: "12",
    month: "JAN",
    year: "2014",
    bdColor: "#000000",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
  {
    date: "12",
    month: "FEB",
    year: "2014",
    bdColor: "#000000",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
  {
    date: "3",
    month: "MAR",
    year: "2012",
    bdColor: "#000000",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
  {
    date: "1",
    month: "APR",
    year: "2011",
    bdColor: "#000000",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
  {
    date: "12",
    month: "FEB",
    year: "2014",
    bdColor: "#000000",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
  {
    date: "3",
    month: "MAR",
    year: "2012",
    bdColor: "#000000",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
  {
    date: "1",
    month: "APR",
    year: "2011",
    bdColor: "#000000",
    linkText:
      "Some quick example text to build on the card title and make upthe bulk of the card's content.",
  },
];

const NewsCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [];
  for (let i = 0; i < newsData.length; i += 3) {
    slides.push(newsData.slice(i, i + 3));
  }

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        autoPlay={false}
        controls={false}
        indicators={false}
        variant="dark"
        className="custom-carousel"
      >
        {slides.map((group, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row>
              {group.map((news, idx) => (
                <Col md={4} sm={12} key={idx}>
                  <NewsCard {...news} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="custom-indicators text-center">
        {slides.map((_, slideIndex) => (
          <img
            key={slideIndex}
            src={
              index === slideIndex
                ? "images/SOne_index_bullet1.png"
                : "images/SOne_index_bullet2.png"
            }
            className="custom-indicator p-1"
            onClick={() => handleSelect(slideIndex)}
            alt={`indicator-${slideIndex}`}
          />
        ))}
      </div>
    </div>
  );
};

const NewsCard = ({ date, month, year, bdColor, linkText }) => {
  return (
    <Card
      className="h-80 border-1 shadow-sm m-1"
      style={{
        borderColor: bdColor,
      }}
    >
      <div
        className="position-absolute top-0 start-0 text-white text-center p-2"
        style={{
          backgroundColor: "black",
          width: "40px",
          borderRadius: "0 0 10px 0",
          fontSize: "10px",
        }}
      >
        <strong>{date}</strong>
        <br />
        {month}
        <br />
        {year}
      </div>

      <Card.Img variant="top" src="images/SOne_index_pic3.jpg" />
      <Card.Body className="p-3">
        <Card.Text className="mt-3">
          <a href="/" className="text-decoration-none text_black13">
            {linkText}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCarousel;
