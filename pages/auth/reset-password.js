/** @format */

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import ControlledCarousel from "../../src/components/CarouselSlider/CarouselSlider";
import Logo from "../../src/components/Logo/Logo";
import Link from "next/link";

export default function ResetPassword() {
  const [togglepass, setTogglepass] = useState({
    pass: false,
    confirmpass: false,
  });

  const values = {
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(6, "Must be 6 characters ")
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
  console.log(formik.errors);
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
                <h3 className="blue_text">Reset Password</h3>
                <p className="m-0 gray_text">
                  Reset your new password but don’t use your older password.
                </p>
              </div>
              <div className="form-group">
                <label>New Password</label>
                <div className="pass_word position-relative">
                  <input
                    name="password"
                    type={togglepass.pass ? "text" : "password"}
                    className="form-control"
                    placeholder=""
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <small className="form-text text-danger">
                      {formik.errors.password}
                    </small>
                  ) : null}
                  <span
                    onClick={() =>
                      setTogglepass({ ...togglepass, pass: !togglepass.pass })
                    }
                  >
                    <img src="/img/hide_icon.svg" className="hide_icon" alt="" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <div className="pass_word position-relative">
                  <input
                    name="confirmPassword"
                    type={togglepass.confirmpass ? "text" : "password"}
                    className="form-control"
                    placeholder=""
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                    }
                  >
                    <img src="/img/hide_icon.svg" className="hide_icon" alt="" />
                  </span>
                </div>
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
