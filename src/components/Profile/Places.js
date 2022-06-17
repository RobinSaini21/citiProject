import React from "react";

function Places() {
  const itemData = [
    {
      img: "img/card_img.png",
      title: " YUN QUE",
    },
    {
      img: "img/card_img2.png",
      title: "YUN QUE ",
    },
    {
      img: "img/card_img3.png",
      title: "YUN QUE ",
    },
    {
      img: "img/card_img4.png",
      title: " YUN QUE",
    },
    {
      img: "img/card_img5.png",
      title: "YUN QUE ",
    },
    {
      img: "img/card_img.png",
      title: "YUN QUE ",
    },
    {
      img: "img/card_img3.png",
      title: " YUN QUE",
    },
    {
      img: "img/card_img4.png",
      title: "YUN QUE ",
    },
    {
      img: "img/card_img.png",
      title: "YUN QUE ",
    },
  ];
  return (
    <>
      <div className="card_box">
        <div className="row rowgap_4">
          {itemData.map((data, i) => (
            <div key={i} className="col-4">
              <div className="card_img position-relative">
                <img src={data.img} alt="" />
                <h6 className="head_h6 white_text position-absolute">
                  {data.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Places;
