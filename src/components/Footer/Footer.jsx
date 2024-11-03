import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-base-200 pt-5">
        <h1 className="text-2xl font-bold text-black  text-center">
          Gadget Heaven
        </h1>
        <p className="text-center mt-3 text-base-400">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className="footer bg-base-200  p-10 flex justify-evenly">
        <nav>
          <h6 className="footer-title text-black">Services</h6>
          <a className="text-slate-500">Product Support</a>
          <a className="text-slate-500">Order Tracking</a>
          <a className="text-slate-500">Shipping & Delivery</a>
          <a className="text-slate-500">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Company</h6>
          <a className="text-slate-500">About us</a>
          <a className="text-slate-500">Contact</a>
          <a className="text-slate-500">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Legal</h6>
          <a className="text-slate-500">Terms of use</a>
          <a className="text-slate-500">Privacy policy</a>
          <a className="text-slate-500">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
