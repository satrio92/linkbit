/* @refresh reload */
import { render } from 'solid-js/web'
import { lazy } from "solid-js";
import { Router } from "@solidjs/router"
import './index.css'
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Location from "./pages/Location.jsx";
import FAQ from "./pages/FAQ.jsx";
import Regulation from "./pages/Regulation.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/location",
    component: Location,
  },
  {
    path: "/faq",
    component: FAQ,
  },
  {
    path: "/regulation",
    component: Regulation,
  },
  {
    path: "/registration",
    component: Registration,
  },
  {
    path: "/login",
    component: Login,
  }
]


const root = document.getElementById('root')

render(() => <Router>{routes}</Router>, root)
