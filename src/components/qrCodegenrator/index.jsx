import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";
const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const generateQRCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div className="qrcontainer">
      <h1>QR Code generator</h1>
      <div className="qrCode">
        <input
          type="text"
          placeholder="enter content here"
          name="qr-code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={generateQRCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="QR_CODE" value={qrCode} size={200} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
