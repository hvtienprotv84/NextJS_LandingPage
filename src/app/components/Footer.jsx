import React from "react";

const Footer = () => {
  return (
    <footer className="footer z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-row items-center justify-between">
        {/* <span>LOGO</span> */}
        <img className="w-[90px] h-[80px] ml-[50px]" src="/images/logo_1.png" alt="ads"/>
        <p className="text-slate-600">&copy; Mọi Bản Quyền Thuộc Về <strong className="text-blue-600">Huỳnh Vĩnh Tiến</strong> &reg;	All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
