
import React, { useState } from "react";
import FileUpload from "@/components/FileUpload";
import TextInput from "@/components/TextInput";
import SuggestionList from "@/components/SuggestionList";
import AIResponseCard from "@/components/AIResponseCard";
import FollowUpSection from "@/components/FollowUpSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [fileContent, setFileContent] = useState<File | null>(null);
  const [textContent, setTextContent] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [aiResponse, setAIResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [followUpQuestion, setFollowUpQuestion] = useState("");
  const [followUpResponse, setFollowUpResponse] = useState("");

  const handleProcessClick = async () => {
    setIsLoading(true);
    
    try {
      // In the future, this will be replaced with actual API call to Python backend
      // Example of future implementation:
      // const formData = new FormData();
      // if (fileContent) formData.append('file', fileContent);
      // if (textContent) formData.append('text', textContent);
      // const response = await fetch('/api/analyze', { method: 'POST', body: formData });
      // const data = await response.json();
      // setAIResponse(data.analysis);
      
      // For now, we'll simulate an AI response with a timeout
      setTimeout(() => {
        setAIResponse(
          "Based on your insurance plan, I've identified the following key points:\n\n" +
          "• Your annual deductible is $1,000 for individual coverage\n" +
          "• Out-of-pocket maximum is $5,000 per calendar year\n" +
          "• Prescription coverage includes a $15 copay for generic medications\n" +
          "• Emergency room visits are covered at 80% after deductible\n" +
          "• Pre-existing conditions are covered after a 6-month waiting period\n\n" +
          "This plan offers good coverage for preventive care but has limited benefits for specialized treatments. Consider reviewing the mental health coverage section, which appears to have significant limitations."
        );
        setShowResponse(true);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error processing document:", error);
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (planName: string) => {
    // Simulate loading a predefined plan
    setTextContent(`This is the content of ${planName}. In a real application, this would be the actual text of the selected insurance plan.`);
  };

  const handleFollowUpSubmit = async (question: string) => {
    setFollowUpQuestion(question);
    
    // In the future, this will be replaced with actual API call
    // Example:
    // const response = await fetch('/api/followup', { 
    //   method: 'POST', 
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ question, context: textContent })
    // });
    // const data = await response.json();
    // setFollowUpResponse(data.answer);
    
    // For now, we'll simulate a response
    setFollowUpResponse(
      "Great question! Based on your plan, preventive care visits are covered at 100% with no deductible when you use in-network providers. This includes annual check-ups, vaccinations, and routine screenings. However, specialized preventive services may require pre-authorization."
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2 text-center">AI Insurance Plan Analyzer</h1>
      <p className="text-gray-600 mb-8 text-center">Upload your insurance plan or paste the text to get an AI-powered analysis</p>
      
      <div className="grid gap-6 mb-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Upload File</h2>
            <FileUpload setFileContent={setFileContent} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Paste Document Text</h2>
            <TextInput textContent={textContent} setTextContent={setTextContent} />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleProcessClick}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Process Document"}
          </Button>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Popular Plans</h2>
          <SuggestionList onSuggestionClick={handleSuggestionClick} />
        </div>
        
        {showResponse && (
          <>
            <div>
              <h2 className="text-xl font-semibold mb-4">AI Analysis</h2>
              <AIResponseCard aiResponse={aiResponse} />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Ask Follow-up Questions</h2>
              <FollowUpSection 
                onSubmit={handleFollowUpSubmit} 
                followUpQuestion={followUpQuestion}
                followUpResponse={followUpResponse}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
