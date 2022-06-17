import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Activities() {
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
      <div key={'acti-'+id} className="item card_img position-relative" data-hash="zero" style={{ width: "130px", height: "130px" }}>
      <img src={data.img} alt="" style={{ width: "100%", height: "100%" }}/>
      <h6 className="head_h6 white_text position-absolute">YUN QUE</h6>
    </div>
      ))}
    </Slider>
  );
}

const itemData = [
  {
    img: "/img/card_img.png",
    title: " Switzerland",
  },
  {
    img: "/img/card_img.png",
    title: " Switzerland",
  },
  {
    img: "/img/card_img.png",
    title: " Switzerland",
  },
  {
    img: "/img/card_img.png",
    title: " Switzerland",
  },
  {
    img: "/img/card_img.png",
    title: " Switzerland",
  },
  {
    img: "/img/card_img.png",
    title: " Switzerland",
  },
  {
    img: "/img/card_img.png",
    title: " Switzerland",
  },
];
