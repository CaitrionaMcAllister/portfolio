import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { PlasticVortex } from "./pages/Projects/PlasticVortex";
import { TheMarioMethod } from "./pages/Projects/TheMarioMethod";
import { ByteMe } from "./pages/Projects/ByteMe";
import { HomeHeatMap } from "./pages/Projects/HomeHeatMap";
import { Chill } from "./pages/Projects/Chill";

import NoPage from "./pages/NoPage";
import Enter from "./pages/Enter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Enter />} />
          <Route path="enter" element={<Enter />} />
          <Route path="contact" element={<Contact />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="plasticvortex" element={<PlasticVortex />} />
          <Route path="themariomethod" element={<TheMarioMethod />} />
          <Route path="byteme" element={<ByteMe />} />
          <Route path="homeheatmap" element={<HomeHeatMap />} />
          <Route path="chill" element={<Chill />} />

          <Route path="layout" element={<Layout />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
);
