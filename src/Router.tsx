import { Star } from "phosphor-react";
import { Route, Routes } from "react-router-dom";
import { Event } from "./Pages/Event";
import { Start } from "./Pages/start";
import { Subscribe } from "./Pages/Subscribe";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Start />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}