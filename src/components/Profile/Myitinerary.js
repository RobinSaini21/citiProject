import React from 'react';
import Link from 'next/link';

function Myitinerary() {
  return (
    <>
     <div className="d-flex upload_div">
                    <div className="upload_box mr-3">
                      <label
                        htmlFor="exampleFormControlFile1"
                        className="m-0 d-flex align-items-center justify-content-center"
                      >
                        <img src="img/add_icon.svg" alt="" />
                      </label>
                      <Link href={"/itinerary/create-itinerary"}>
                      <input
                        type="file"
                        className="form-control-file d-none"
                        id="exampleFormControlFile1"
                      />
                      </Link>
                    </div>
                    <div className="create_itinerary d-flex align-items-center justify-content-center">
                      <img src="img/hand.svg" alt="" />
                      <span>
                        There is no itinerary please start to create from here
                      </span>
                    </div>
                  </div>
    
    </>
  )
}

export default Myitinerary