import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./router-practice/Layout";
import Home from "./router-practice/Home";
import About from "./router-practice/AboutUs";
import Contact from "./router-practice/ContactUs";
import User from "./router-practice/User";
import Github, { githubInfoLoader } from "./router-practice/Github";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
ReactDOM.render(
  <>
    <RouterProvider router={router} />
  </>,

  document.getElementById("root")
);
