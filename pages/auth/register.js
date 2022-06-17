/** @format */

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import ControlledCarousel from "../../src/components/CarouselSlider/CarouselSlider";
import Logo from "../../src/components/Logo/Logo";
import Link from "next/link";

export default function Register() {
  const [togglepass, setTogglepass] = useState({
    pass: false,
    confirmpass: false,
  });

  const values = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Please enter your first name"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Please enter your last name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(6, "Must be 8 characters ")
        .required("Please enter your passsword"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.errors.firstname, formik.errors.firstname);
  return (
    <section className="login_sec">
      <div className="row custm_row m-0">
        <div className="col-lg-5 p-0 login_slide">
          <ControlledCarousel />
        </div>
        <div className="col-lg-7 p-0 right_box">
          <form className="login_form signup_form position-relative">
            <div className="form_box">
              <Logo />
              <div className="d-flex justify-content-between align-items-center">
                <div className="login_head">
                  <h3 className="blue_text">Signup</h3>
                  <p className="m-0 gray_text">
                    Create your citiskope account now.
                  </p>
                </div>
                <a className="signup_logo d-md-none" href="#" title="">
                  <img src="/img/logo.png" alt="" />
                </a>
              </div>

              <div className="row custom_row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      name="firstname"
                      type="text"
                      className="form-control"
                      placeholder="ex. Kate"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstname}
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (
                      <small className="form-text text-danger">
                        {formik.errors.firstname}
                      </small>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      name="lastname"
                      type="text"
                      className="form-control"
                      placeholder="ex. Kate"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                      <small className="form-text text-danger">
                        {formik.errors.lastname}
                      </small>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="ex. demo@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="form-text text-danger">
                    {formik.errors.email}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="pass_word position-relative">
                  <input
                    type={togglepass.pass ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <small className="form-text text-danger">
                      {formik.errors.password}
                    </small>
                  ) : null}
                  <span
                    onClick={() =>
                      setTogglepass({ ...togglepass, pass: !togglepass.pass })
                    }>
                    <img
                      src="/img/hide_icon.svg"
                      className="hide_icon"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="form-group mb_17">
                <label>Confirm Password</label>
                <div className="pass_word position-relative">
                  <input
                    type={togglepass.confirmpass ? "text" : "password"}
                    name="confirmPassword"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    placeholder=""
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <small className="form-text text-danger">
                      {formik.errors.confirmPassword}
                    </small>
                  ) : null}
                  <span
                    onClick={() =>
                      setTogglepass({
                        ...togglepass,
                        confirmpass: !togglepass.confirmpass,
                      })
                    }>
                    <img
                      src="/img/hide_icon.svg"
                      className="hide_icon"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="check_forgot">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="custom1"
                    required
                  />
                  <label
                    className="custom-control-label black_text"
                    htmlFor="custom1">
                    Keep me updated with Citiscope news
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="btn w-100 login_btn"
                onClick={formik.handleSubmit}>
                Sign Up
                <img
                  className="d-md-none"
                  src="img/arrow_right_icon.svg"
                  alt=""
                />
              </button>
              <div className="no_account">
                <p className="gray_text m-0">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    title=""
                    className="orange_text signUp_link">
                    Login
                  </Link>
                </p>
              </div>
            </div>
            <div className="copy_right">
              <p className="m-0 black_text">© 2022 Demo all right reserved.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
