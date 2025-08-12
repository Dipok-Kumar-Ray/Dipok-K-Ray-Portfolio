import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import ProfilePhoto from "../assets/profile.png"

 const HomeSlider = () => {
  return (
    <section className="bg-[#0F172A] text-white min-h-screen flex items-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 mx-auto">

        {/* Left Content */}
        <div className="flex-1">
          {/* <p className="text-green-400 text-lg mb-2">
            • Code meets creativity — by Dipok Kumar Ray
          </p> */}

          {/* Name + Typewriter */}
          <h1 className="text-5xl font-bold leading-tight">
            I'm <span className="text-green-400">Dipok</span>,<br />
            <span className="text-green-400">
              <Typewriter
                words={['JavaScript Developer', 'MERN Stack Developer', 'Competitive Programmer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-300 max-w-lg">
            I'm Dipok Kumar Ray, a mern stack developer from Bangladesh. 
            I build modern, user-focused web applications using JavaScript and the MERN stack. 
            
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#projects"
              className="bg-green-400 text-black px-6 py-3 rounded-full font-medium hover:bg-green-500 transition"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              className="border border-gray-500 px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-2xl">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaFacebook /></a>
          </div>
        </div>

        {/* Right Image */}
 {/* Right Image */}
<div className="flex-1 flex justify-center relative">
  <div className="relative">
    {/* Gradient Border */}
    <div className="rounded-xl p-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <img
        src={ProfilePhoto}
        alt="Dipok"
        className="block rounded-xl w-64 h-64 object-cover border-0 shadow-lg"
      />
    </div>
    {/* Tag */}
    <div className="absolute bottom-4 right-0 bg-green-500 text-black px-4 py-1 rounded-lg text-sm font-bold shadow-md">
      MERN Stack Developer
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
export default HomeSlider;