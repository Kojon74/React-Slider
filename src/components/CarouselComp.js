import React from "react";
import people from "../data";
import { Carousel } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import "./CarouselComp.css";

const CarouselComp = () => {
  return (
    <Carousel className="carousel" indicators={false}>
      {people.map((person) => {
        return (
          <Carousel.Item key={person.id}>
            <img src={person.image} alt="Profile" />
            <h2 className="name">{person.name}</h2>
            <h2 className="title">{person.title}</h2>
            <p>{person.quote}</p>
            <FaQuoteRight />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComp;
