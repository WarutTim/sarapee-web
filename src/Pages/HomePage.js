import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import RegisterPatienForm from "../Components/RegisterPatientForm/RegisterPatienForm";

function HomePage() {
  return (
    <div>
      <Hometab activetab="/home"/>
      <RegisterPatienForm />
      <Footer />
    </div>
  );
}

export default HomePage;
