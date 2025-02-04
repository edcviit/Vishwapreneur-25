import React from "react";
import { FaEnvelope, FaHandsHelping, FaUserFriends, FaMicrophone } from "react-icons/fa";
// import { contact } from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div name="contact" id="contact" className="mt-12">
      <div className="p-4 ">
        {/* <div className="p-4 bg-black"> */}
        <div class="nine">
          <h1 className="main-heading pt-28 bg-gradient-to-r from-[#FF4669] to-[#CE1790] text-transparent bg-clip-text text-2xl font-bold text-center py-8">
            Contact Us
          </h1>
        </div>
        <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-4 px-10">
          <Card
            title="Speaking Opportunities"
            subtitle="curation.vishwapreneur25@gmail.com"
            href="mailto:curation.vishwapreneur25@gmail.com"
            Icon={FaMicrophone}
            phone={"+91 9561211033"}
          />
          <Card
            title="Sponsorship Opportunities"
            subtitle="edcflm.sponsorship@gmail.com "
            href="mailto:edcflm.sponsorship@gmail.com"
            Icon={FaHandsHelping}
            phone={"+91 9970007004"}
          />
          <Card
            title="Collaboration Opportunities"
            subtitle="pr.vishwapreneur25@gmail.com"
            href="mailto:pr.vishwapreneur25@gmail.com"
            Icon={FaUserFriends}
            phone={"+91  8010165540"}
          />
          <Card
            title="Queries"
            subtitle="contact@vishwapreneur.in"
            href="mailto:contact@vishwapreneur.in "
            phone="+91 7499404987"
            Icon={FaEnvelope}
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href,phone }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4669] to-[#CE1790] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-gray-900 group-hover:text-[#FF7659] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#FF406C] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-200 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
      {/* <br /> */}
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {phone}
      </p>
    </a>
  );
};

export default Contact;
