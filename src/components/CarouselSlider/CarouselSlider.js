import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import firstImage from "../../../public/images/image.png"


export default function ControlledCarousel() {
  return (
    <Carousel fade className="h-100 login-carousal">
      <Carousel.Item className="h-100">
        <img
          className="d-block h-100"
          src={firstImage.src}
          alt="First slide"
          style={{objectFit:"cover"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-100">
        <img
          className="d-block h-100"
          src={firstImage.src}
          alt="Third slide"
          style={{objectFit:"cover"}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-100">
        <img
          className="d-block h-100"
          src={firstImage.src}
          alt="Third slide"
          style={{objectFit:"cover"}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
