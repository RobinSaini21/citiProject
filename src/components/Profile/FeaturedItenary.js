import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselItinerary() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {itemData.map((data, id) => (
        <div
          key={id}
          className="item  card_item position-relative"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            src={data.img}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <img
            className="position-absolute"
            src="/img/Save_toFolder Icon.svg"
            alt=""
          />
          <h6 className="position-absolute">
            <img src="/img/location_icon.svg" alt="" />
            Switzerland
          </h6>
        </div>
      ))}
    </Slider>
  );
}

const itemData = [
  {
    img: "/img/Card.png",
    title: " Switzerland",
  },
  {
    img: "/img/Card.png",
    title: " Switzerland",
  },
  {
    img: "/img/Card.png",
    title: " Switzerland",
  },
  {
    img: "/img/Card.png",
    title: " Switzerland",
  },
  {
    img: "/img/Card.png",
    title: " Switzerland",
  },
  {
    img: "/img/Card.png",
    title: " Switzerland",
  },
  {
    img: "/img/Card.png",
    title: " Switzerland",
  },
];
