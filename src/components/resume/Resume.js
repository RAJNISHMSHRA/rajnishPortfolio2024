import React, { Component, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../assests/pdf/rajnish.pdf";
// import PDFViewer from "pdf-viewer-reactjs";
// Core viewer
// import { Viewer } from "@react-pdf-viewer/core";

// // Plugins
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// // Import styles
// // import "@react-pdf-viewer/core/lib/styles/index.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./Resume.css";

import soumya from "./Soumya.pdf";

function Resume(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  React.useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);
  //   console.log(pdf);
  const onNext = (e, type) => {
    if (type == "for" && Number(pageNumber) < Number(numPages)) {
      setPageNumber((prev) => prev + 1);
    } else if (type == "back" && Number(pageNumber) > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };
  return (
    <div style={{ width: "50%", height: "auto", margin: "  2% auto" }}>
      <Document
        file={props.pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        // height={"100px"}

        // options={{ workerSrc: "/pdf.worker.js" }}
      >
        <Page
          pageNumber={pageNumber}
          wrap={false}
          width={200}
          height={40}
          canvasBackground="white"
          scale={4}
          className={"canva"}
          renderAnnotationLayer={true}
        />
      </Document>
      <span>
        Page {pageNumber} of {numPages}
      </span>
      <span style={{ marginLeft: "2%" }}>
        <a onClick={(e) => onNext(e, "for")}>Next</a>
      </span>
      <span style={{ marginLeft: "2%" }}>
        <a onClick={(e) => onNext(e, "back")}>Prev</a>
      </span>

      {/* <PDFViewer
        document={{
          url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
        }}
      /> */}

      {/* <Viewer
        fileUrl="./r.pdf"
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      /> */}
    </div>
  );
}

export default Resume;
