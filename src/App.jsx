import azam from './assets/images3.png'
import azam2 from './assets/1695456183_1.jpg'
import Git from './assets/hubl.png'
import jS from './assets/js.png'
import i from './assets/i.webp'
import JSD from './assets/jm.jpg'
import html from './assets/html.png'
import react from './assets/react.png'
import githup from './assets/gho.jpg'
import socail from './assets/socail.webp'
import reactro from './assets/ReactRouter.webp'
import './App.css'
import { useState } from "react";

import { bg, bgc, bgh } from '../colors'
function App() {
  const [full, useFull] = useState(false)
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full ">
      <div className="fixed top-0 left-0 w-full text-white z-50" style={{backgroundColor: bg}}>
        <div className="flex items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold">LOGO</h1>

          <div className="hidden md:flex gap-10 items-center">
            <a href="#home">HOME</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact" className="bg-white text-black px-4 py-2 rounded-lg">
              CONTACT
            </a>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col items-center gap-6 pb-6">
            <a href="#home" onClick={() => setOpen(false)}>HOME</a>
            <a href="#skills" onClick={() => setOpen(false)}>SKILLS</a>
            <a href="#projects" onClick={() => setOpen(false)}>PROJECTS</a>
            <a
              href="#contact"
              className="bg-white text-black px-4 py-2 rounded-lg"
              onClick={() => setOpen(false)}
            >
              CONTACT
            </a>
          </div>
        )}
      </div>


      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 max-w-6xl mx-auto" id='home'>
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold">Hi, I AM</p>
          <h1 className="text-3xl md:text-4xl font-bold">JASGASBAYEV ADHAMBIY</h1>
          <h3 className="text-lg text-green-400 font-bold">
            FRONT-END DEVELOPER / UI DESIGNER
          </h3>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <img className="w-10 h-10" src={Git} alt="" />
            <img className="w-10 h-10 rounded-full" src={jS} alt="" />
            <img className="w-10 h-10 rounded-full" src={i} alt="" />
          </div>
        </div>

        <img className="w-64 md:w-100 rounded-2xl mt-150 md:mt-20" src={azam2} alt="" />
      </div>

      <div className="py-12 mt-[-40px]" id='skills' style={{ backgroundColor: bgc }}>
        <p className="text-center text-3xl font-bold text-white">SKILLS</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-6 max-w-6xl mx-auto">

          <div className="rounded-9xl glow bg-white p-5 rounded-xl border text-center">
            <img className="animate-pulse w-24 h-24 mx-auto rounded-full" src={JSD} alt="" />
            <h1 className="text-xl font-bold mt-3">JAVASCRIPT</h1>
          </div>

          <div className="rounded-9xl glow bg-white p-5 rounded-xl border text-center">
            <img className="animate-pulse w-24 h-24 mx-auto rounded-full" src={html} alt="" />
            <h1 className="text-xl font-bold mt-3">HTML</h1>
          </div>

          <div className="rounded-9xl glow bg-white p-5 rounded-xl border text-center">
            <img className="animate-pulse w-24 h-24 mx-auto rounded-full" src={react} alt="" />
            <h1 className="text-xl font-bold mt-3">REACT</h1>
          </div>

          <div className="rounded-9xl glow bg-white p-5 rounded-xl border text-center">
            <img className="animate-pulse w-24 h-24 mx-auto rounded-full" src={githup} alt="" />
            <h1 className="text-xl font-bold mt-3">GITHUB</h1>
          </div>

        </div>
      </div>

      <div className="py-12 max-w-6xl mx-auto px-6" id='PROJECTS'>
        <p className="text-center text-3xl font-bold">PROJECTS</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-blue-950 rounded-2xl p-5 text-white">
            <img className="w-full h-40 object-cover rounded-xl mb-4" src={reactro} alt="" />
            <h2 className="text-xl font-bold">React Router - Frontend Architecture</h2>
            <p className="mt-2">
              I worked on this project to improve my experience with routing and structure.
            </p>
          </div>

          <div className="bg-blue-950 rounded-2xl p-5 text-white">
            <img className="w-full h-40 object-cover rounded-xl mb-4" src={socail} alt="" />
            <h2 className="text-xl font-bold">SocialApp - Frontend Development</h2>
            <p className="mt-2">
              Built with React and Tailwind. Similar to Instagram, still improving features.
            </p>
          </div>

        </div>
      </div>

      <div className="bg-gray-400 py-12" style={{ backgroundColor: bgh }} id='contact'>
        <div className="max-w-6xl mx-auto px-6">

          <p className="text-3xl font-bold text-center">CONTACT</p>

          <div className="flex flex-col md:flex-row justify-between mt-10 gap-10">

            <div className="text-center md:text-left">
              <span className="text-red-600 text-4xl font-bold">Get In Touch</span>
              <p className="mt-4 font-semibold">
                If you're considering my contribution, <br />
                have a question, or just want to say hi, <br />
                feel free to reach out!
              </p>

              <button className="bg-black mt-6 px-6 py-3 text-xl font-bold text-white rounded-lg">
                📞 SAY HELLO
              </button>
            </div>

            <div className="text-center md:text-left">
              <p className="text-2xl text-white font-bold">Contact Information</p>
              <p className="text-white pt-2">💬 adhambiyjalgasbayev0@gmail.com</p>
              <p className="text-white pt-2">📞 +998 (77) 777 77-77</p>
              <p className="text-white pt-2">📌 Kungrad, Uzbekistan</p>
              <p className="text-white pt-4 font-semibold">Social Media</p>
            </div>

          </div>
        </div>
      </div>

    </div >
  )
}

export default App