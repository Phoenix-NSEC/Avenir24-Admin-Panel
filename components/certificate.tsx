"use client";
import React from "react";

const CertificateDownload: React.FC = () => {
  const userName = "John Doe"; // Hardcoded user name for testing
  const certificateImageUrl =
    "https://res.cloudinary.com/do3exrhoc/image/upload/v1719248463/certificate_puoub6.webp"; // URL of the hosted certificate image

  const downloadCertificate = async () => {
    const certificateImage = new Image();
    certificateImage.crossOrigin = "anonymous"; // Set crossOrigin attribute to handle CORS
    certificateImage.src = certificateImageUrl;

    certificateImage.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = certificateImage.width;
        canvas.height = certificateImage.height;

        ctx.drawImage(certificateImage, 0, 0);
        ctx.font = "30px Arial"; // Adjust the font size and style as needed
        ctx.fillStyle = "black"; // Adjust the text color as needed
        ctx.fillText(userName, 200, 220); // Adjust the coordinates as needed

        const link = document.createElement("a");
        link.download = "certificate.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    };

    certificateImage.onerror = () => {
      console.error("Failed to load the certificate image.");
    };
  };

  return (
    <div>
      <button onClick={downloadCertificate}>Download Certificate</button>
    </div>
  );
};

export default CertificateDownload;
