import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaStackOverflow,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import ProfilePhoto from "../assets/profile.png";

const HomeSlider = () => {
  return (
    <section className="bg-[#0F172A] text-white min-h-screen flex items-center px-4 sm:px-6 py-10">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 mx-auto">

        {/* ================= Left Content ================= */}
        <div className="flex-1 text-center md:text-left">
          {/* === Name + Typewriter === */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight">
            I'm{" "}
            <span className="text-green-400 block sm:inline">
              Dipok Kumar Ray
            </span>
            ,
            <br className="hidden sm:block" />
            <span className="block sm:inline text-green-400 mt-2 sm:mt-0">
              <Typewriter
                words={[
                  "JavaScript Developer",
                  "MERN Stack Developer",
                  "Competitive Programmer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          {/* === Description === */}
          <p className="mt-4 text-gray-300 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
            I'm Dipok Kumar Ray, a passionate MERN stack developer from Bangladesh.
            I create modern, user-focused web applications using JavaScript and the
            MERN stack, aiming for clean and efficient solutions.
          </p>

          {/* === Buttons === */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-green-400 text-black px-6 py-3 rounded-full font-medium hover:bg-green-500 transition"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/drive/folders/1pGcYvWkBsZQ0wnm-VXD_16aLxiLpaG1e?usp=sharing"
              className="border border-gray-500 px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>

          {/* === Social Icons === */}
          <div className="flex justify-center md:justify-start gap-5 mt-6 text-2xl">
            <a
              href="https://www.facebook.com/dipok.kumer.roy.2024"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Dipok-Kumar-Ray"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dipok-kumar-ray/?locale=en_US"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://stackoverflow.com/users/29004572/dipok-kumay-ray"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaStackOverflow />
            </a>
          </div>
        </div>

        {/* ================= Right Image ================= */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
            {/* === Gradient Border === */}
            <div className="rounded-xl p-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              <img
                src={ProfilePhoto}
                alt="Dipok"
                className="block rounded-xl w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* === Tag === */}
            <div className="absolute -bottom-4 right-0 bg-green-500 text-black px-4 py-1 rounded-lg text-xs sm:text-sm font-bold shadow-md whitespace-nowrap">
              MERN Stack Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
