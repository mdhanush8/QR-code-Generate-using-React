import React, { useState } from 'react'

export const QrCode = () => {

  const [img, setImag] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("https://www.w3schools.com/");
  const [qrSize, setQrsize] = useState("150");

  async function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)} `;
      setImag(url);


    } catch (error) {
      console.error("Error Generating QR code", error)
    } finally {
      setLoading(false);
    }

  }

  function downloadQR() {
    fetch(img).then((response) => response.blob()).then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "QRCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => {
      console.error("Error Downloading QR code", error)
    })
  }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>please wait...</p>}
      {img && <img src={img} className="qr-code-image" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data For QR Code
        </label>
        <input type="text" value={qrData} id="dataInput" placeholder="Enter data for QR code"
          onChange={(e) => setQrData(e.target.value)} />
        <label htmlFor="sizeInput" className="input-label" >
          Image size(e.g., 150):
        </label>
        <input type="text" value={qrSize} id="sizeInput" placeholder="Enter image size"
          onChange={(e) => setQrsize(e.target.value)} />
        <button className="generate-button" disabled={loading}
          onClick={generateQR}>Generate QR Code </button>
        <button className="download-button" onClick={downloadQR}>Download QR Code</button>
      </div>
      <div className="footer">
        <p>Designed By <a href="https://www.google.com">Google</a></p>
      </div>
    </div>
  )
}
