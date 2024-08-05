import { useState } from "react";
import QRCode from "qrcode.react";

const QrCodegenerator = () => {
  const [url, setUrl] = useState("");

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Enter URL"
        style={{ width: "300px", padding: "10px" }}
      />
      <div style={{ marginTop: "20px" }}>
        {url && (
          <QRCode
            value={url}
            size={256}
            bgColor="#ffffff"
            fgColor="#000000"
            level="L"
          />
        )}
      </div>
    </div>
  );
};

export default QrCodegenerator;
