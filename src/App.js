import "./App.css";

import {
  Header,
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
} from "./Containers";
import { Navbar, Brand, CTA } from "./Components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
