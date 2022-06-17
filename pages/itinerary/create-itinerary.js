import React from "react";
import Header from "../../src/components/Layout/Account/Header";
import Activity from "../../src/components/Itinerary/Activity";
import Days from "../../src/components/Itinerary/Days";
import Link from "next/link";


function CreateItinerary() {

  return (
    <>
      <Header>
        <div className="footer_menu d-md-none">
          <ul className="navbar-nav nav_menu">
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center justify-content-center"
                href="#"
              >
                <img src="/img/home.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="/img/discover.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="/img/plus_menu.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="/img/bucket.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="user_img">
                  <img src="/img/user_img.jpg" alt="" />
                </span>
              </a>
            </li>
          </ul>
          <div className="copy_right d-md-none"></div>
          <div className="around_btn">
            <button type="button" className="btn w-100">
              <img src="/img/location_icon.svg" alt="" />
              Around me
            </button>
          </div>
        </div>
        <div className="padd_top"></div>

        <section className="main_sec">
          <div className="container">
            <div className="tab_sec">
              <Link href="/account">
                <a>
              <span className="backToHome position-relative roboto_font d-inline">
                <a href="#" title="" className="back_btn">
                  <img
                    className="d-none d-md-inline m-0"
                    src="/img/back_arrow_black.svg"
                    alt=""
                  />
                  <img
                    className="d-md-none m-0"
                    src="/img/back_arrow_icon.svg"
                    alt=""
                  />
                </a>
                Back to Home
              </span>
              </a>
              </Link>
              <ul
                className="nav nav-pills public_tab text-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Public
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Private
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="public_form">
                    <div className="form-group">
                      <label className="d-md-block d-none">
                        Title of itinerary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title of itinerary"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Itinerary Short Description...."
                      ></textarea>
                    </div>
                  </div>

                  <Days />

                  <Activity />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </section>
      </Header>
    </>
  );
}

export default CreateItinerary;
