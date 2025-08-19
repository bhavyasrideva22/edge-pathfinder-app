import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Brain, ArrowRight } from "lucide-react";

interface PsychometricSectionProps {
  onComplete: (data: Record<string, number>) => void;
}

const psychometricQuestions = [
  {
    id: 'debugging_complex',
    text: 'I enjoy debugging complex constraints in low-resource environments.',
    category: 'Technical Persistence'
  },
  {
    id: 'optimization_excitement',
    text: 'I am excited by optimizing systems for performance.',
    category: 'Performance Focus'
  },
  {
    id: 'hands_on_learning',
    text: 'I believe I learn faster through hands-on experimentation.',
    category: 'Learning Style'
  },
  {
    id: 'bottleneck_persistence',
    text: 'I persist until a performance bottleneck is resolved.',
    category: 'Grit & Persistence'
  },
  {
    id: 'detail_oriented',
    text: 'I pay close attention to small details that can impact system performance.',
    category: 'Conscientiousness'
  },
  {
    id: 'systems_thinking',
    text: 'I naturally think about how software and hardware interact.',
    category: 'Systems Thinking'
  },
  {
    id: 'real_time_pressure',
    text: 'I work well under the pressure of real-time system constraints.',
    category: 'Stress Management'
  },
  {
    id: 'emerging_tech',
    text: 'I actively seek out information about emerging technologies.',
    category: 'Openness to Experience'
  },
  {
    id: 'iterative_improvement',
    text: 'I find satisfaction in making incremental improvements to systems.',
    category: 'Growth Mindset'
  },
  {
    id: 'autonomous_systems',
    text: 'I consider the ethical implications of autonomous AI systems.',
    category: 'Ethical Awareness'
  }
];

const likertOptions = [
  { value: '1', label: 'Strongly Disagree' },
  { value: '2', label: 'Disagree' },
  { value: '3', label: 'Neutral' },
  { value: '4', label: 'Agree' },
  { value: '5', label: 'Strongly Agree' }
];

export const PsychometricSection = ({ onComplete }: PsychometricSectionProps) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    const numericAnswers: Record<string, number> = {};
    Object.entries(answers).forEach(([key, value]) => {
      numericAnswers[key] = parseInt(value);
    });
    onComplete(numericAnswers);
  };

  const isComplete = Object.keys(answers).length === psychometricQuestions.length;
  const progress = (Object.keys(answers).length / psychometricQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="bg-gradient-to-r from-primary/5 to-brain/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            Psychometric Analysis
          </CardTitle>
          <p className="text-muted-foreground">
            These questions assess your personality traits, persistence, and cognitive style that align with successful Edge AI developers.
          </p>
          <div className="w-full bg-progress-bg rounded-full h-2">
            <div 
              className="bg-progress-fill h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardHeader>
      </Card>

      <div className="space-y-6">
        {psychometricQuestions.map((question, index) => (
          <Card key={question.id} className="transition-all duration-200 hover:shadow-md">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {question.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Question {index + 1} of {psychometricQuestions.length}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    {question.text}
                  </h3>
                </div>

                <RadioGroup
                  value={answers[question.id] || ''}
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4"
                >
                  {likertOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                      <Label 
                        htmlFor={`${question.id}-${option.value}`}
                        className="text-sm leading-tight cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end pt-6">
        <Button 
          onClick={handleSubmit}
          disabled={!isComplete}
          className="bg-gradient-to-r from-primary to-secondary-vibrant hover:from-primary-dark hover:to-secondary-vibrant/90 text-white px-6 py-3"
        >
          Continue to Technical Assessment
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};