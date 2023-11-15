import React, { useContext, useState, useEffect } from 'react';
import { ChatContext } from '../../contextr/ChatsContext';
import { extname } from 'path-browserify';
import { ArticleOutlined, DownloadOutlined, Image, InsertDriveFileOutlined, PictureAsPdf } from '@mui/icons-material';

function Message({ owner, messages }) {
  const { data } = useContext(ChatContext);
  const [fileType, setFileType] = useState('');


  const handleDownloadF = (filename, fileUrl) => {
    // Create a temporary link element
    const link = document.createElement('a');
    // Set the file name for the download

    // Set the href and download attributes of the link
    link.href = fileUrl;
    link.download = filename;

    // Simulate a click on the link element to trigger the download

    link.click();
  };


  useEffect(() => {
    if (messages && messages.chatFiles) {
      Object.entries(messages.chatFiles).forEach(([key, value]) => {
        const url = new URL(value);
        const fileExtension = extname(url.pathname).toLowerCase();
        let fileType = 'Unknown';

        switch (fileExtension) {
          case '.pdf':
            fileType = 'PDF';
            break;
          case '.jpg':
          case '.jpeg':
          case '.png':
            fileType = 'Image';
            break;
          case '.docx':
          case '.docs':
            fileType = 'Word';
            break;
          case '.mp3':
            fileType = 'Audio';
            break;
          case '.mp4':
            fileType = 'Video';
            break;
          default:
            fileType = fileExtension;
            break;
        }

        setFileType(fileType);
      });
    }
  }, [messages]);

  return (
    <div className={`message ${owner}`}>
      
      <div className={`text ${owner}`}>
        {messages && (
          <div className='message_group'>
            <p>{messages.message}</p>
            {messages.chatFiles != undefined &&
              Object.entries(messages.chatFiles).map(([key, value]) => (
                <div className='file_preview'>
      
                  {fileType == "PDF"? <div className='fileIcon'><span>{key}</span><PictureAsPdf className='message_icon'/><DownloadOutlined className="download_icon" onClick={()=>handleDownloadF(key, value)}/></div>:
                  fileType == "Word"? <div className='fileIcon'><span>{key}</span><ArticleOutlined className='message_icon'/><DownloadOutlined className="download_icon" onClick={()=>handleDownloadF(key, value)}/></div>:
                  fileType == "Image"? <div className='fileIcon'><span>{key}</span><Image className='message_icon'/><DownloadOutlined className="download_icon" onClick={()=>handleDownloadF(key, value)}  /></div>:
                   <div className='fileIcon'><span>{key}</span><InsertDriveFileOutlined className='message_icon'/><DownloadOutlined className="download_icon" onClick={()=>handleDownloadF(key, value)} /></div>
                   } 
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
