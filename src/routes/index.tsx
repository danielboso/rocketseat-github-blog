import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/default";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<DefaultLayout />}>
    <Route index element={<Home />} />
    <Route path="/issues/:id" element={<Post />} />
  </Route>
))