import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import IconButton from "@material-ui/core/IconButton";
import BackNavigation from "@material-ui/icons/NavigateBefore";
import ForwardNavigation from "@material-ui/icons/NavigateNext";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale=".60" />
      </Document>
      <div>
        <p style={{ fontSize: 18, color: "white" }}>
          Página {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
        </p>
        <IconButton
          color="primary"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          <BackNavigation />
        </IconButton>
        <IconButton
          color="primary"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <ForwardNavigation />
        </IconButton>
      </div>
    </>
  );
}
