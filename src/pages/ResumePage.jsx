import './../App.css'
import NavigationBar from '../NavigationBar';
import { Button } from "antd";

// export const DownloadLink = ({ url, fileName }) => {
//     return (
//       <a href={url} download={fileName}>
//             <Button type="primary">Download Resume</Button>
//         </a>
//     );
//   };

export const DownloadLink = ({ url, fileName }) => {
  const handleDownload = (event) => {
      event.preventDefault();
      
      fetch(url)
          .then(response => response.blob())
          .then(blob => {
              const downloadUrl = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = downloadUrl;
              link.download = fileName || 'downloaded-file.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              window.URL.revokeObjectURL(downloadUrl);
          })
          .catch(error => console.error('Error downloading file:', error));
  };

  return (
      <Button type="primary" onClick={handleDownload}>
          Download Resume
      </Button>
  );
};

function ResumePage() {
    const downloadUrl = "/Titouan_Guerin_Resume.pdf";
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