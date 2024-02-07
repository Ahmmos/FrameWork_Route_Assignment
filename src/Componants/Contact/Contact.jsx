import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container py-5">
        <div className="mt-5 py-5">
          <h2 className=" fw-bolder text-center fs-1">CONATCT SECTION</h2>
          <div className="starContact  text-center">
          <i className="fa-solid fa-star my-2 text-black fs-4 "></i>
          </div>
        </div>

        <div>
          <form
            action
            className="w-50 p-3 mx-auto mt-3 "
          >
            <label htmlFor="userName" className="position-relative ">
            </label>
            <input
              id="userName"
              type="text"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative "
            />
            <label htmlFor="userAge" className="position-relative ">
            </label>
            <input
              id="userAge"
              type="text"
              placeholder="userAge"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative "
            />
            <label htmlFor="userEmail" className="position-relative ">
            </label>
            <input
              id="userEmail"
              type="text"
              placeholder="userEmail"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative "
            />
            <label htmlFor="userPassword" className="position-relative ">
            </label>
            <input
              id="userPassword"
              type="text"
              placeholder="userPassword"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative "
            />
            <button className="btn mt-4 text-white btn btn-success">
              {" "}
              send Message{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
