import React from "react";

export default function Layer(props) {
  return (
    <>
      <div
        style={{ display: props.status ? "none" : "flex" }}
        className="overPage  justify-content-center align-items-center  "
      >
        <img
          src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
          alt=""
          className="w-50"
        />
      </div>
    </>
  );
}
