import React from "react";

function Suggested() {
  const proflies = [1, 2, 4, 5, ];
  return (
    <div className="media_box">
      {proflies.map((data) => (
        <div key={data} className="media align-items-center">
          <div className="media-left">
            <img src="img/user_img.jpg" alt="" />
          </div>
          <div className="media-body">
            <h5 className="m-0">Ann Aminoff</h5>
            <span className="gray_text">4.8M</span>
          </div>
          <button type="button" className="btn">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="media align-items-center">
<div className="media-left">
  <img src="img/user_img.jpg" alt="" />
</div>
<div className="media-body">
  <h5 className="m-0">Ann Aminoff</h5>
  <span className="gray_text">4.8M</span>
</div>
<button type="button" className="btn">
  Follow
  </button>
</div> */
}

export default Suggested;
