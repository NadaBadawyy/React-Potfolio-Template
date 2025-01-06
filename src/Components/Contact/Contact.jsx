import React, { useState } from "react";

import style from "./contact.module.css";
import "../../index.css";
export default function Contact() {
  const [val, setval] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  return (
    <>
      <div className="container ">
        <div className=" m-auto p-5 mt-5  ">
          <h1 className="pt-5 text-uppercase fw-bolder text-center darktxt  ">
            conatct section
          </h1>
          <div className="d-flex justify-content-center  text-center mb-4 darktxt overflow-hidden">
            <div
              className={`border-bottom bcolor border-4 ${style.w} mx-2`}
              id="border"
            ></div>
            <i class="fa-solid fa-star"></i>
            <div
              className={`border-bottom bcolor border-4 ${style.w} mx-2`}
              id="border"
            ></div>
          </div>
          <div className={`  ${style.input} m-auto`}>
          <div className={`pt-4 mb-4 ${style.p} `}>
                <label
                  htmlFor="user Name"
                  className={
                    val == ""
                      ? `position-absolute top-100 bottom-0 left-0 right-0 form-label ${style.txt} overflow-hidden `
                      : ` ${style.l} position-absolute top-0 bottom-0 left-0 right-0 form-label ${style.txt}  `
                  }
                >
                  User Name
                </label>
                <input
                  type="text"
                  value={val}
                  className={`form-control border-0 border-bottom border-body-secondary rounded-0 `}
                  id="user Name"
                  placeholder="userName.."
                  onChange={(e) => {
                    setval(e.target.value);
                  }}
                />
              </div>
              <div className={`pt-4 mb-4 ${style.p}`}>
                <label
                  htmlFor="user Age"
                  className={
                    age == ""
                      ? `position-absolute top-100 bottom-0 left-0 right-0 form-label ${style.txt} overflow-hidden `
                      : ` ${style.l} position-absolute top-0 bottom-0 left-0 right-0 form-label ${style.txt}  `
                  }
                >
                  User Age:
                </label>
                <input
                  type="number"
                  value={age}
                  className={`form-control border-0 border-bottom border-body-secondary rounded-0  `}
                  id="user Age"
                  placeholder="userAge.."
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                />
              </div>
              <div className={`pt-4 mb-4  ${style.p} `}>
                <label
                  htmlFor="user Email"
                  className={
                    email == ""
                      ? ` ${style.l} position-absolute top-100 bottom-0 left-0 right-0 form-label ${style.txt} overflow-hidden `
                      : ` ${style.l} position-absolute top-0 bottom-0 left-0 right-0 form-label ${style.txt}   `
                  }
                >
                  User Email:
                </label>
                <input
                  type="email"
                  value={email}
                  className={` form-control border-0 border-bottom border-body-secondary rounded-0 `}
                  id="user Email"
                  placeholder="userEmail.."
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
              <div className={`pt-4 mb-4 ${style.p} `}>
                <label
                  htmlFor="user Password"
                  className={
                    pass == ""
                      ? `position-absolute top-100 bottom-0 left-0 right-0 form-label ${style.txt} overflow-hidden `
                      : ` ${style.l} position-absolute top-0 bottom-0 left-0 right-0 form-label ${style.txt}   `
                  }
                >
                  User Password:
                </label>
                <input
                  type="text"
                  value={pass}
                  className={`form-control border-0 border-bottom border-body-secondary rounded-0 `}
                  id="user Password"
                  placeholder="userPassword.."
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                />
              </div>
              <div className="text-white">
                <button className={`btn p-2 mt-3 ${style.bg} text-white`}>
                  send Message
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
