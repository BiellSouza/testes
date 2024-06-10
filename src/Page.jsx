import React from "react";
import Header from "./Sections/Header";
import Ligador from "./Sections/Ligador1";
import Ligador2 from "./Sections/Ligador2";
import LigadorRed from "./components/LigadorRed";
import LigadorGreen from "./components/LigadorGreen";
import AboutUs from "./Sections/AboutUs";
import Instruction from "./Sections/Instructions";
import CepSearch from "./Sections/Tracking";
import Doações from "./Sections/Doações";
import Footer from "./Sections/Footer";

function Page() {
  return (
    <div>
      <Ligador2 />
      <Header />
      <LigadorRed />
      <AboutUs />
      <LigadorRed />
      <Instruction />
      <LigadorGreen />
      <CepSearch />
      <Ligador />
      <Doações/>
      <Footer/>
    </div>
  );
}

export default Page;
