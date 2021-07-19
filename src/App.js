import React from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./menu-virtual.pdf";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-content">
        <SinglePagePDFViewer pdf={samplePDF} />
      </div>
    </div>
  );
}
