import React from "react";
import Button from "./components/Button";
import Signup from "./components/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";
import Render from "./components/Render";

function App() {
  return (
    <div className="bg-gray-200">
          {/*Navbar section*/ }
          <nav className="shadow-md p-4"> 
            <ul className="flex justify-evenly ">
              <li><a href="" className="text-blue-500 hover:underline">Home</a></li>
              <li><a href="" className="text-blue-500 hover:underline">Contact</a></li>
              <li><a href="" className="text-blue-500 hover:underline">About</a></li>
              <li><a href="" className="text-blue-500 hover:underline">Footer</a></li>
            </ul>
          </nav>
          {/*Header section*/ }
          <section className=" p-8">
            <h1 className="text-4xl font-bold text-center"> 
              Welcome To Porfolio
            </h1>
            <p className="text-lg text-gray-600t text-center ">Build your Tailwind css Site.</p>
            <div className="text-center">
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-500 ">
                Get Started
              </button>
            </div>
          </section>
          {/*Project card*/}
          <section className="max-w-sm mx-auto shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mt-3">Project Title</h2>
            <p className="text-gray-600 mt-2  "> A cool project for landing tailwind css</p>
            <button className="mt-4 px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-8 00 transition duration-500">View Project</button>
        
          </section>
          {/*About me */ }
          <section className="flex flex-col md:flex-row items-center p-8">
            {/*<div className="w-32 h-32 rounded-full border-4 border-blue-500">
              <img src=""/>
            </div>*/}
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">About me</h2>
              <p className="text-gray-600 mt-3 text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut deserunt esse, pariatur ducimus enim odio voluptas alias non. 
                Quos eius vel quisquam. Illum optio impedit quis harum aliquid ut aliquam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus, 
                officiis mollitia aperiam qui odit maxime, distinctio perferendis,
                corrupti dicta enim repellat maiores natus cum ab fuga. Qui, commodi reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut deserunt esse, pariatur ducimus enim odio voluptas alias non. 
                Quos eius vel quisquam. Illum optio impedit quis harum aliquid ut aliquam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus, 
                officiis mollitia aperiam qui odit maxime, distinctio perferendis,
                corrupti dicta enim repellat maiores natus cum ab fuga. Qui, commodi reiciendis!
              </p>
            <div className="mt-4">
                <span className="inline-block bg-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm mr-2">HTML</span>
                <span className="inline-block bg-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm mr-2">CSS</span>
                <span className="inline-block bg-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm mr-2">JAVASCRIPT </span>
                <span className="inline-block bg-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm mr-2">REACT</span>
            </div>
          </div>
          </section>
          {/* Project section  */}
          <section className="p-8 ">
            <h2 className="text-3xl font-bold text-center mb-8">Project</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/*card section */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">E-commerce Website</h3>
                  <p className="text-gray-600 mt-2 text-center">I have created e-commerce site for user to looting him </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Tailwind CSS </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">View</button>
                  </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">E-commerce Website</h3>
                  <p className="text-gray-600 mt-2 text-center">I have created e-commerce site for user to looting him </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Tailwind CSS </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">View</button>
                  </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">E-commerce Website</h3>
                  <p className="text-gray-600 mt-2 text-center">I have created e-commerce site for user to looting him </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Tailwind CSS </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">View</button>
                  </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">E-commerce Website</h3>
                  <p className="text-gray-600 mt-2 text-center">I have created e-commerce site for user to looting him </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Tailwind CSS </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">View</button>
                  </div>
              </div>
            </div>
          </section>
          {/* contact form */ }
          <section className="p-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact us </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-1">Name</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="your name" type="text" />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-1">Email </label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="sample@gmail.com" type="text" />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-1">Section</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter description" type="text" />
                </div>
                <button type="submit" className="bg-blue-400 w-full py-2 rounded-md text-white hover:bg-blue-500 transition duration-400">
                  send Message
                </button>
              </form>
            </div>
          </section>
          {/* footer section */ }
          <footer className="bg-gray-800  p-8 ">
            <div className="text-center">
              <h3 className="text-lg font-semibold"> Connect with me</h3>
              <div className="mt-4 space-x-4">
                <a href="#" className="text-blue-400 hover:underline">Linkedln</a>
                <a href="#" className="text-blue-400 hover:underline">Github</a>
                <a href="#" className="text-blue-400 hover:underline">Twitter</a>
              </div>
              <p className="mt-4 text-sm text-gray-400">@ 2025 Naveen Shukla . All right are reserved </p>
            </div>  
          </footer>
    </div>
  );
}

export default App;
