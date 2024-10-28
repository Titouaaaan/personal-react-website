import './../App.css'
import NavigationBar from '../NavigationBar';
import { Button } from "antd";

export const DownloadLink = ({ url, fileName }) => {
    return (
      <a href={url} download={fileName}>
            <Button type="primary">Download Resume</Button>
        </a>
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