
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FollowUpSectionProps {
  onSubmit: (question: string) => void;
  followUpQuestion: string;
  followUpResponse: string;
}

const FollowUpSection: React.FC<FollowUpSectionProps> = ({
  onSubmit,
  followUpQuestion,
  followUpResponse,
}) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your queries here..."
          className="flex-1"
        />
        <Button type="submit">Ask</Button>
      </form>

      {followUpResponse && (
        <div className="mt-4 space-y-4">
          {followUpQuestion && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 font-medium">{followUpQuestion}</p>
            </div>
          )}
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-800">{followUpResponse}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FollowUpSection;
