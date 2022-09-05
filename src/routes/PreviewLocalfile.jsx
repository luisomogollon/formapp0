import * as React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PreviewLocalFile = () => {
  const [url, setUrl] = React.useState("");

  const onChange = (e) => {
    const files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={onChange} />
      <div className="mt4" style={{ height: "270px" }}>
        {url ? (
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "100%",
            }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
              <Viewer fileUrl={url} />
            </Worker>
          </div>

        ) : (
          <div
            style={{
              alignItems: "center",
              border: "2px dashed rgba(0, 0, 0, .3)",
              display: "flex",
              fontSize: "2rem",
              height: "100%",
              justifyContent: "center",
              width: "100%",
            }}
          >
            Vista Previa PDF
          </div>
        )}
        
      </div>
    </div>
  );
};

export default PreviewLocalFile;
