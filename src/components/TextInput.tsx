
import React from "react";
import { Textarea } from "@/components/ui/textarea";

interface TextInputProps {
  textContent: string;
  setTextContent: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ textContent, setTextContent }) => {
  return (
    <Textarea
      placeholder="Paste your insurance plan text here..."
      value={textContent}
      onChange={(e) => setTextContent(e.target.value)}
      className="min-h-[180px] resize-none"
    />
  );
};

export default TextInput;
