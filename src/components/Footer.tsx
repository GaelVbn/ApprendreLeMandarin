import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#f4f3f1] font-bold p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} <br /> All right reserved by
          VANBEVEREN Gaël
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
