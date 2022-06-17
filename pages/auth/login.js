/** @format */

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { login } from "../../src/Store/MiddleWare/authMiddleware";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ControlledCarousel from "../../src/components/CarouselSlider/CarouselSlider";
import Logo from "../../src/components/Logo/Logo";
import Googlelogin from "../../src/components/sociallogin/Googlelogin";
import Facebooklogin from "../../src/components/sociallogin/Facebooklogin";


export default function Login() {
  const dispatch = useDispatch();
  const [togglepass, setTogglepass] = useState(false);

  const values = {
    email: "",
    password: "",
  };

  
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(6, "Must be 6 characters or more")
        .required("Please enter your password"),
    }),
    onSubmit: async (values) => {
      dispatch(login(values));
    },
  });

  return (
    <>
      <section className="login_sec">
        <div className="row custm_row m-0">
          <div className="col-lg-5 p-0 login_slide">
            <ControlledCarousel />
          </div>
          <div className="col-lg-7 p-0 right_box d-flex align-items-center justify-content-center">
            <div className="form_box position-relative">
              <Logo />
              <div className="login_head">
                <h3 className="blue_text">Login</h3>
                <p className="m-0 gray_text">Please login in to continue!</p>
              </div>
              <form className="login_form position-relative">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    className="form-control"
                    placeholder="ex. demo@gmail.com"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <small className="form-text text-danger">
                      {formik.errors.email}
                    </small>
                  ) : null}
                </div>
                <div className="form-group mb_17">
                  <label>Password</label>
                  <div className="pass_word position-relative">
                    <input
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type={togglepass ? "text " : "password"}
                      className="form-control"
                      placeholder="**********"
                    />
                    <span onClick={() => setTogglepass((prev) => !prev)}>
                      <img
                        src="/img/hide_icon.svg"
                        className="hide_icon"
                        alt=""
                      />{" "}
                    </span>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <small className="form-text text-danger">
                      {formik.errors.password}
                    </small>
                  ) : null}
                </div>
                <div className="d-flex justify-content-between align-items-center check_forgot">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlValidation1"
                      required
                    />
                    <label
                      className="custom-control-label black_text"
                      htmlFor="customControlValidation1">
                      Remember me
                    </label>
                  </div>
                  <Link href="forgot-password">
                    <a href="#" title="" className="blue_text forgot_link">
                      Forgot password?
                    </a>
                  </Link>
                </div>
                <button
                  type="button"
                  className="btn w-100"
                  onClick={formik.handleSubmit}>
                  Login
                </button>
              </form>
              <div className="or text-center">
                <span className="orange_text">OR</span>
              </div>

              <div className="google_fb row">
                <div className="col-6 order-md-6">
                  <Facebooklogin />
                </div>
                <div className="col-6">
                  <Googlelogin />
                </div>
              </div>
              <div className="no_account">
                <p className="gray_text m-0">
                  Don’t have an account?{" "}
                  <Link
                    href="/auth/register"
                    title=""
                    className="orange_text signUp_link">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="copy_right">
                <p className="m-0 black_text">
                  © 2022 Demo all right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
