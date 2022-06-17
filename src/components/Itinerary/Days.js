import React from 'react'

function Days() {
  return (
    <>
    	<div className="d-flex ">
						<div className="upload_box upload_gray">
							<label htmlFor="exampleFormControlFile1" className="m-0 d-flex align-items-center justify-content-center"><img src="/img/add_icon2.svg" alt=""/></label>
    						<input type="file" className="form-control-file d-none" id="exampleFormControlFile1"/>
						</div>
						<div className="dayTab">
							<ul className="nav nav-pills day_tab" id="pills-tab2" role="tablist">
								<li className="nav-item">
										<a className="nav-link active" id="day-tab" data-toggle="pill" href="#day1" role="tab" aria-controls="pills-day" aria-selected="true">Day 1<span className="d-block">Mar 12, 2022</span></a>
								</li>
								{/* <li className="nav-item">
										<a className="nav-link" id="day2-tab" data-toggle="pill" href="#day2" role="tab" aria-controls="pills-day2" aria-selected="false">Day 2<span className="d-block">--</span></a>
								</li>
								<li className="nav-item">
										<a className="nav-link" id="day3-tab" data-toggle="pill" href="#day3" role="tab" aria-controls="pills-day3" aria-selected="false">Day 3<span className="d-block">--</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="day4-tab" data-toggle="pill" href="#day4" role="tab" aria-controls="pills-day4" aria-selected="false">Day 4<span className="d-block">--</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="day5-tab" data-toggle="pill" href="#day5" role="tab" aria-controls="pills-day5" aria-selected="false">Day 5<span className="d-block">--</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="day6-tab" data-toggle="pill" href="#day6" role="tab" aria-controls="pills-day6" aria-selected="false">Day 6<span className="d-block">--</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="day7-tab" data-toggle="pill" href="#day7" role="tab" aria-controls="pills-day7" aria-selected="false">Day 7<span className="d-block">--</span></a>
								</li> */}
							</ul>
						</div>
						
					</div>
    </>
  )
}

export default Days