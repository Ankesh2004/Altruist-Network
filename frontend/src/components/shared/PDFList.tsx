import React from 'react';
// import { FileText, Download } from 'lucide-react';

const PDFList = ({ pdfFiles }:{pdfFiles:File[]}) => {
  const handleDownload = (url:string, filename:string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">PDF Documents</h2>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {pdfFiles.map((file, index) => (
          <li 
            key={index}
            className="flex items-center justify-between p-4 hover:bg-gray-50 border-b last:border-b-0"
          >
            <div className="flex items-center space-x-3">
              {/* <FileText className="text-gray-500" size={20} /> */}
              <span className="text-gray-700">{file.name}</span>
            </div>
            <button
              onClick={() => handleDownload("File url", file.name)}
              className="flex items-center space-x-1 text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              {/* <Download size={18} /> */}
              <span>Download</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;