import "./App.css";
import Mynav from "./components/Mynav";

import Herosec from "./components/Herosec";
import About from "./components/About";
import Tokenomics from "./components/tokenomics";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import standbike from "./assets/images/standbike.webp";
import scatredbike from "./assets/images/cartdragon.webp";
import Backtop from "./components/Backtop";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloder";
import Utility from "./components/Utility";
import AOS from 'aos';
import 'aos/dist/aos.css';
document.body.classList.add("overflow-hidden");

function App() {
  const [preloader, setpreloader] = useState(true);
  setTimeout(() => {
    setpreloader(false);
    document.body.classList.remove("overflow-hidden");
  }, 3000);
   useEffect(() => {
    AOS.init(
      {
         once: true,
         duration:2000,
      }
        );
      }, [])
  return (
    <div className="App bg-[#0A4740]">
      {preloader && <Preloader />}
      <div className='bg-[url("./assets/images/herobg.webp")] overflow-x-clip relative z-[4] bg-no-repeat bg-cover lg:bg-size xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px]'>
        <Mynav />
        <Herosec />
        <img
          src={standbike}
          alt="standbike"
          className=" animate-headerbike2 absolute z-[-1] sm:bottom-[18%] bottom-[6%] right-[32%]"
        />
        <img
          src={scatredbike}
          alt="standbike"
          className=" animate-movebike absolute z-[-1] sm:block hidden sm:bottom-[10%] bottom-[7%] right-[3%]"
        />
      </div>
      <About />
      <Tokenomics />
      <Utility />
      <Roadmap />
      <Faq />
      <Footer />
      <Backtop />
    </div>
  );
}

export default App;
