import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="  bg-black">
        <div className="flex flex-row mx-4 py-4">
          <div className=" basis-2/3 text-white">
            <div className="flex flex-row py-6 m-4 px-6">
              <div className="basis-1/3 p-2">
                Tutor Review
                <ul>
                  <li className="text-xs pt-2">Reviews</li>
                  <li className="text-xs pt-2">About Us</li>
                  <li className="text-xs pt-2">Contact Us </li>
                </ul>
              </div>
              <div className="basis-1/3 p-2">
                Carrers
                <ul>
                  <li className="text-xs pt-2">Blog </li>
                  <li className="text-xs pt-2">Help and Support</li>
                  <li className="text-xs pt-2">Investor </li>
                </ul>
              </div>
              <div className="basis-1/3 p-2">
                Terms
                <ul>
                  <li className="text-xs pt-2">Privacy Policy </li>
                  <li className="text-xs pt-2">Cookie Setting</li>
                  <li className="text-xs pt-2">Accessibility Statement </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" basis-1/3 grid-cols-4 text-white pt-6">
            <div className="pt-3">Newsletters</div>
            <input
              type="email"
              placeholder="Email Address"
              className="py-2 px-7 my-2"
            />

            <div className="flex justify-center my-4 inline">
              <div className="m-1 inline">
                <FaFacebook size={32} />
              </div>
              <div className="m-1 inline">
                <FaInstagram size={32} />
              </div>
              <div className="m-1 inline">
                <FaTelegram size={32} />
              </div>
            </div>
            <button className="mx-auto bg-deep-orange rounded font-semibold text-white block my-2 px-5 py-1">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="border-t-2 border-white" />
        <p className=" text-center text-white p-6">
          &copy;{" "}
          <span className="text-sm">
            2023 Tutor Review Inc. All rights reserved.
          </span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
