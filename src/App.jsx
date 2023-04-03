import React from "react";
import "./index.css";

import { Header } from "./pages/Header";
import { Hero } from "./pages/Hero";
import { Footer } from "./pages/Footer";

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
