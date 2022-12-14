import Nav from "./components/mainComponents/Nav";
import { useState } from "react";
import Accounts from "./components/mainComponents/Accounts";
import Main from "./components/mainComponents/Main";
import About from "./components/mainComponents/About";
import MySkills from "./components/mainComponents/MySkills";
import WhatCanIDo from "./components/mainComponents/WhatCanIDo.jsx";
import Contact from "./components/mainComponents/Contact";
function App() {

  //ToDo : update the heading for each component (make it smaller and style it )
  //ToDo : add your image in about component
  //ToDo : color some keywords in the about component
  //ToDo : whatCanIDo reponsive 
  //ToDo : add accounts in the most bottom of the website in mobile browsers  

  const [scrolling, setScrolling] = useState(true)
  return (
    <div className={`bg-navy text-white relative ${scrolling ? "h-fit" : "h-[100vh]"} overflow-hidden `}>
      <Nav toggle={setScrolling} />
      <Accounts.Social />
      <Accounts.Email />
      <div className="w-[90%] xl:w-[70%] mx-auto">
        <Main />
        <About />
        <MySkills />
        <WhatCanIDo />
        <Contact />
      </div>

    </div>
  );
}

export default App;
