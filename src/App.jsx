import React from "react";
import "./index.css";

import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { Hero } from "./pages/Hero";

function App() {
  return (
    <div className="App bg-colorPrimario overflow-hidden text-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
