import React from "react";
import register from "../../../image/register.png";
import "./Register.local.css";
import google from "../../../image/google.png";

const Register = () => {
  return (
    <div id="register">
      <div
        className="modal fade position-absolute"
        style={{ paddingTop: "6vw" }}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabe2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content position-relative mt-5">
            <button
              type="button"
              className="btn-close position-absolute bg-white p-2 pt-1 ps-1 rounded-circle"
              style={{ right: -30, top: -37 }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div className="modal-body p-0">
              <div
                style={{ backgroundColor: "rgba(25, 135, 84,0.2)" }}
                className="px-3 py-2"
              >
                <div
                  className="text-success text-center"
                  style={{ fontSize: "14px" }}
                >
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </div>
              </div>
            </div>
            <div className="row p-4">
              <div className="col-12 col-md-6">
                <h6 className="text-end d-md-none">
                  Already Have an Account?{" "}
                  <span
                    role="button"
                    className="text-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Sign In
                  </span>
                </h6>
                <h1 className="ps-3">Create Account</h1>
                <div className="input-group mx-3">
                  <div className="d-flex">
                    <input
                      className="bg-light border-1 py-1 w-50 border-bottom-0 border-end-0 px-2"
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="bg-light border-1 py-1 w-50 border-bottom-0 px-2"
                      // style={{ marginRight: 0, width: "11.58vw" }}
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    className="bg-light border-1 py-1 w-100 border-bottom-0 px-2"
                    style={{ marginLeft: "0px" }}
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="bg-light border-1 py-1 w-100 border-bottom-0 px-2"
                    style={{ marginLeft: "0px" }}
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="bg-light border-1 py-1 w-100 px-2"
                    style={{ marginLeft: "0px" }}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="btn btn-primary rounded-pill d-block ms-3 mt-3 w-100">
                  Create Account
                </div>
                <div className="btn border-1 border-secondary rounded w-100 ms-3 mt-3">
                  <i className="fa-brands fa-facebook me-3"></i>
                  Continue With Facebook
                </div>
                <div className="btn border-1 border-secondary rounded w-100 ms-3 mt-3">
                  <img className="me-3" src={google} alt="" />
                  Continue With Facebook
                </div>
              </div>
              <div className="d-none d-md-block col-6">
                <h6 className="text-end">
                  Already Have an Account?{" "}
                  <span
                    role="button"
                    className="text-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Sign In
                  </span>
                </h6>
                <img src={register} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
