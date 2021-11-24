import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import ICFForm from "../Components/ICFForm/ICFForm";

function ICFPage() {
  return (
    <div>
      <Hometab activetab="/icf" />
      <ICFForm />
      <Footer />
    </div>
  );
}

export default ICFPage;
