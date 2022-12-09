import Nav from "./components/mainComponents/Nav";
import { useState } from "react";
import Accounts from "./components/mainComponents/Accounts";
import Main from "./components/mainComponents/Main";
import About from "./components/mainComponents/About";
import MySkills from "./components/mainComponents/MySkills";
import  WhatCanIDo from "./components/mainComponents/WhatCanIDo.jsx";
function App() {
  const [scrolling, setScrolling] = useState(true)
  return (
    <div className={`bg-navy text-white relative ${scrolling ? "h-fit" : "h-[100vh]"} overflow-hidden `}>
      <Nav toggle={setScrolling} />
      <Accounts.Social />
      <Accounts.Email />
      <div className="w-[70%] mx-auto">
        <Main />
        <About />
        <MySkills />
        <WhatCanIDo />
      </div>

    </div>
  );
}

export default App;
