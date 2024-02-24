import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full lg:h-screen md:h-screen sm:h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! I'm a Full Stack Developer with a Bachelor's degree in
          Information Technology and 3 years of hands-on experience. Currently,
          I work as a Senior Systems Engineer at Infosys, where I focus on
          designing, developing, and deploying backend applications.
        </p>
        <br />
        <p className="text-xl">
          Throughout my career, I've contributed to various projects, ranging
          from web applications to enterprise solutions. My expertise lies in
          crafting high-performance applications using languages like Python and
          JavaScript. I'm proficient in web technologies such as HTML, CSS,
          JavaScript, and React. Database-wise, I've worked with MySQL and
          MongoDB. Additionally, I have hands-on experience with cloud
          technologies like AWS.
        </p>
        <br />
        <p className="text-xl">
          I am also good in data structures and algorithms, I love to solve
          coding problems on different coding platform like leetcode and
          geeksforgeeks. I'm passionate about creating efficient and effective
          solutions that elevate user experiences. Let's build something great
          together!
        </p>
      </div>
    </div>
  );
};

export default About;
