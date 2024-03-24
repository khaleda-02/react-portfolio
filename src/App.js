import Accounts from "./components/mainComponents/Accounts";
import Main from "./components/mainComponents/Main";
import About from "./components/mainComponents/About";
import WhatCanIDo from "./components/mainComponents/WhatCanIDo.jsx";
import Footer from "./components/mainComponents/Footer";
import Nav from "./components/mainComponents/Nav";
import { useState } from "react";
import MyExperience from "./components/mainComponents/MyExperience.jsx";
import Offer from "./components/mainComponents/Offer.jsx";

function App() {
  const [scrolling, setScrolling] = useState(true);
  return (
    <div
      className={`bg-navy text-white relative ${
        scrolling ? "h-fit" : "h-[100vh]"
      } overflow-hidden `}
    >
      <Nav toggle={setScrolling} scroll={scrolling} />
      <div className="w-[90%] xl:w-[70%] mx-auto">
        <Main />
        <About />
        <MyExperience />
        <WhatCanIDo />
        <Offer />
        <Accounts.Social />
        <Accounts.Email />
      </div>
      <Footer />
    </div>
  );
}

export default App;
