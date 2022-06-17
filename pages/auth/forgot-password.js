/** @format */

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ControlledCarousel from "../../src/components/CarouselSlider/CarouselSlider";
import Logo from "../../src/components/Logo/Logo";
import Link from "next/link";

export default function ForgotPassword() {
  const values = {
    email: "",
  };

  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="login_sec forgot_page">
      <div className="row custm_row m-0">
        <div className="col-lg-5 p-0 login_slide">
          <ControlledCarousel />
        </div>
        <div className="col-lg-7 p-0 right_box">
          <form className="login_form position-relative">
            <div className="form_box">
              <div className="justify-content-between align-items-center back_box">
                <Link href="login">
                  <a className="back_btn" href="#" title="">
                    <img src="/img/back_arrow_icon.svg" alt="" />
                    Back to Login
                  </a>
                </Link>
                <Logo />
              </div>
              <div className="login_head">
                <h3 className="blue_text">Forgot Password</h3>
                <p className="m-0 gray_text">
                  Enter your email address and well sent you a link to restore
                  password.
                </p>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="ex. demo@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control"
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="form-text text-danger">
                    {formik.errors.email}
                  </small>
                ) : null}
              </div>
            </div>
            <button
              type="button"
              onClick={formik.handleSubmit}
              className="btn w-100 login_btn"
            >
              Get restore link
            </button>
            <div className="copy_right">
              <p className="m-0 black_text">© 2022 Demo all right reserved.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
