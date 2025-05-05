
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

interface FileUploadProps {
  setFileContent: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ setFileContent }) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFileContent(file);
      setFileName(file.name);
    } else {
      setFileContent(null);
      setFileName("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
        <Input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="space-y-2">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div className="text-gray-700 font-medium">
              Click to upload or drag and drop
            </div>
            <p className="text-xs text-gray-500">
              Supports PDF, DOCX, TXT (max 10MB)
            </p>
          </div>
        </label>
      </div>
      {fileName && (
        <div className="text-sm text-gray-700 bg-blue-50 p-2 rounded-md">
          Selected file: <span className="font-medium">{fileName}</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
