import './../App.css'
import NavigationBar from '../NavigationBar';
import { Button } from "antd";

export const DownloadLink = ({ url, fileName }) => {
    const handleDownload = () => {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.download = fileName || "downloaded-file";
          document.body.appendChild(link);
  
          link.click();
  
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error fetching the file:", error);
        });
    };
  
    return (
      <div>
        <Button type="primary" onClick={handleDownload}>
          Download Resume
        </Button>
      </div>
    );
  };

function ResumePage() {
    const downloadUrl = '../assets/Titouan_Guerin_Resume_3.0.pdf'
    return (
        <div>
            <NavigationBar/>
            <div className='bg-image'></div>
            <div class="bg-text">
                <h1>Feel free to download my CV!</h1>
                <DownloadLink url={downloadUrl} fileName="Titouan_Guerin_CV.pdf" />
            </div>
            
        </div>
    );
}

export default ResumePage;