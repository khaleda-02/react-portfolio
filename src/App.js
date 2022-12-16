import Accounts from "./components/mainComponents/Accounts";
import Main from "./components/mainComponents/Main";
import About from "./components/mainComponents/About";
import MySkills from "./components/mainComponents/MySkills";
import WhatCanIDo from "./components/mainComponents/WhatCanIDo.jsx";
import Contact from "./components/mainComponents/Contact";
import Footer from "./components/mainComponents/Footer";
function App() {

  //todo : blog
  //todo : animation 
  //todo : loading animation 
  //todo : fix my , py for each component 
  //todo : update main component on mobile screen
  // const [scrolling, setScrolling] = useState(true)
  return (
    // <div className={`bg-navy text-white relative ${scrolling ? "h-fit" : "h-[100vh]"} overflow-hidden `}>
    //   <Nav toggle={setScrolling} />
    <div className={`bg-navy text-white relative `}>
      {/* <Nav toggle={setScrolling} /> */}
      <div className="w-[90%] xl:w-[70%] mx-auto">
        <Main />
        <About />
        <MySkills />
        <WhatCanIDo />
        <Contact />
        <Accounts.Social />
        <Accounts.Email />
      </div>
      <Footer />
    </div>
  );
}

export default App;
