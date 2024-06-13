"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import ZaloinIcon from "../../../public/zalo4.svg";
import FacebookinIcon from "../../../public/facebook5.svg";
import TwitterinIcon from "../../../public/twitter.svg";
import InstagraminIcon from "../../../public/instagram.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Hãy Liên Hệ Với Tôi
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Hộp thư đến của tôi luôn mở. Cho dù bạn có câu hỏi hay chỉ muốn chào hỏi, tôi sẽ cố gắng hết sức để trả lời bạn!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={FacebookinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image className="mt-[-3px]" src={TwitterinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={InstagraminIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="linkedin.com">
            <img className="w-[38px] h-[38px] mt-[3px] ml-[5px]" src='https://anhouse.design/wp-content/uploads/2024/05/zalo-ic-400x400.png' alt="Linkedin Icon" />
          </Link>
          {/* <Link href="linkedin.com">
            <img className="w-[40px] h-[40px] ml-[5px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png' alt="Linkedin Icon" />
          </Link> */}
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Nhập Email của bạn!
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="tien@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Nội Dung
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Nhập nội dung nào..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Tin Nhắn
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Nhập tin nhắn nào..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
