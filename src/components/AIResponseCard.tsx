
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Speaker, Copy } from "lucide-react";

interface AIResponseCardProps {
  aiResponse: string;
}

const AIResponseCard: React.FC<AIResponseCardProps> = ({ aiResponse }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(aiResponse);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } else {
      toast({
        title: "Not Supported",
        description: "Text-to-speech is not supported in your browser.",
        variant: "destructive",
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResponse);
    toast({
      title: "Copied!",
      description: "The AI analysis has been copied to your clipboard.",
    });
  };

  // Format the response text to handle newlines properly
  const formattedText = aiResponse.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < aiResponse.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-end space-x-2 mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handleTextToSpeech}
            className={isSpeaking ? "bg-blue-100 text-blue-700" : ""}
            title="Text-to-Speech"
          >
            <Speaker className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            title="Copy to Clipboard"
          >
            <Copy className="h-5 w-5" />
          </Button>
        </div>
        <div className="text-gray-800 whitespace-pre-line">
          {formattedText}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIResponseCard;
