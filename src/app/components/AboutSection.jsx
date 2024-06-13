"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row">
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>TailwindCSS</li>
        <li>TypeScript</li>
      </ul>
      <ul className="list-disc pl-10">
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>Redux</li>
        <li>Bootstrap</li>
        <li>Figma</li>
        <li>Photoshop</li>
      </ul>
      <ul className="list-disc pl-10">
        <li>Java</li>
        <li>C#</li>
        <li>SQL Server</li>
        <li>MySQL</li>
        <li>Firebase</li>
        <li>MongoDB</li>
      </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>B1 English</li>
        <li>Presentation and Teamwork Skills</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="https://img.pikbest.com/origin/10/39/14/59WpIkbEsTVxf.jpg!w700wp" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Tôi là lập trình viên Front-End Web Developer với niềm đam mê tạo ra các trang web đẹp mắt 
          và tiện ích thuận tiện tương tác và đáp ứng tốt. tôi có kinh nghiệm làm việc với HTML, CSS, 
          JavaScript, ReactJS, Tailwind CSS, và Git. Tôi là người học nhanh hiểu nhanh và luôn muốn mở rộng 
          thêm kiến thức cũng như kỹ năng của mình. Tôi là người có thể làm việc độc lập đơn lẻ hoặc làm việc 
          cùng nhóm đều đạt được kết quả và hiệu quả tốt nhất để tạo ra được những sản phẩm ứng dụng tuyệt vời. 
          thế mạnh của tôi là tự xử lý và giải quyết vấn đề.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Kỹ Năng{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Học Vấn{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Chứng Chỉ{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
