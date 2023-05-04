import { lazy } from "react";

export const Layout = lazy (()=> import("..//Layout/Layout.jsx"))
export const Home = lazy(() => import ("../Pages/Home/Home.jsx"));
export const Answers = lazy(() => import ('../Pages/Answers/Answers.jsx'));
export const Contacts = lazy(() => import ('../Pages/Contacts/Contacts.jsx'));
export const Reviews = lazy(() => import ('../Pages/Reviews/Reviews.jsx'));
export const Shop = lazy(() => import ('../Pages/Shop/Shop.jsx'));
export const Error = lazy(() => import ('../Pages/Error/Error.jsx'));
