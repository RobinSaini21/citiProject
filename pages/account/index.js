import React from "react";
import CarouselItinerary from "../../src/components/Profile/FeaturedItenary";
import Activities from "../../src/components/Profile/Activities";
import Header from "../../src/components/Layout/Account/Header";
import Places from "../../src/components/Profile/Places";
import Suggested from "../../src/components/Profile/Suggested";
import PlaceAndDates from "../../src/components/Profile/PlaceAndDates";
import Myitinerary from "../../src/components/Profile/Myitinerary";
import Filter from "../../src/components/Profile/Filter";
import GoogleAutoComplete from "../../src/components/Profile/GoogleAutoComplete";

const home = () => {

  return (
    <>
      <Header>

        <div className="footer_menu">
          <ul className="navbar-nav nav_menu d-md-none">
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center justify-content-center"
                href="#"
              >
                <img src="img/home.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="img/discover.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="img/plus_menu.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="img/bucket.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="user_img">
                  <img src="img/user_img.jpg" alt="" />
                </span>
              </a>
            </li>
          </ul>
          <div className="copy_right d-md-none"></div>
          <div className="around_btn">
            <button type="button" className="btn w-100">
              <img src="img/location_icon.svg" alt="" />
              Around me
            </button>
          </div>
        </div>

        <div className="padd_top"></div>

        <section className="main_sec">
          <div className="container">
            <div className="place_box">
              <PlaceAndDates />
            </div>
            <div className="row">
              <div className="col-lg-8">
                <Filter />
                <div className="seeMore_box">
                  <div className="d-flex align-items-center justify-content-between seeMore_head">
                    <h3 className="head_h3 m-0">My Itinerary</h3>
                    <a className="see_more orange_text" href="#" title="">
                      See More
                    </a>
                  </div>

                  <Myitinerary />
                </div>
                <div className="seeMore_box">
                  <div className="d-flex align-items-center justify-content-between seeMore_head">
                    <h3 className="head_h3 m-0">Featured Itinerary</h3>
                    <a className="see_more orange_text" href="#" title="">
                      See More
                    </a>
                  </div>
                  <div id="featureditenary">
                    <div className="row">
                      <div
                        className="large-12 columns"
                        style={{ width: "100%" }}
                      >
                        <CarouselItinerary />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="seeMore_box">
                  <div className="d-flex align-items-center justify-content-between seeMore_head">
                    <h3 className="head_h3 m-0">Activities</h3>
                    <a className="see_more orange_text" href="#" title="">
                      See More
                    </a>
                  </div>
                  <div id="activities">
                    <div className="row">
                      <div
                        className="large-12 columns"
                        style={{ width: "100%" }}
                      >
                        <Activities />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="around_me">
                  <div className="seeMore_head">
                    <h3 className="head_h3 m-0">Around me</h3>
                  </div>
                  <div className="d-flex align-items-center justify-content-between near_place mb-3">
                    <h5 className="head_h5 m-0">Near by Places</h5>
                    <a className="see_more orange_text" href="#" title="">
                      See More
                    </a>
                  </div>

                  <Places />

                  <div className="d-flex align-items-center justify-content-between near_place mb-3">
                    <h5 className="head_h5 m-0">Suggested people</h5>
                    <a className="see_more orange_text" href="#" title="">
                      See More
                    </a>
                  </div>
                  <Suggested />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Header>
    </>
  );
};

export default home;
