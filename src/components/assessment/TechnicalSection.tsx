import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Cpu, ArrowRight, Code, Zap } from "lucide-react";

interface TechnicalSectionProps {
  onComplete: (data: Record<string, number>) => void;
}

const technicalQuestions = [
  {
    id: 'quantization_knowledge',
    text: 'What does quantization do in model deployment?',
    type: 'multiple_choice',
    category: 'Core Concepts',
    options: [
      { value: '1', label: 'Increases model accuracy', points: 1 },
      { value: '2', label: 'Reduces model size and computation by using lower precision', points: 5 },
      { value: '3', label: 'Improves training speed', points: 2 },
      { value: '4', label: 'Adds more layers to the model', points: 1 }
    ]
  },
  {
    id: 'edge_optimization',
    text: 'You need to deploy a computer vision model on a Raspberry Pi with 1GB RAM. The model currently uses 2GB. What should you prioritize?',
    type: 'multiple_choice',
    category: 'Problem Solving',
    options: [
      { value: '1', label: 'Upgrade the hardware', points: 1 },
      { value: '2', label: 'Model pruning and quantization', points: 5 },
      { value: '3', label: 'Use cloud processing instead', points: 2 },
      { value: '4', label: 'Reduce input image resolution only', points: 3 }
    ]
  },
  {
    id: 'bottleneck_identification',
    text: 'In edge deployment, what is typically the primary bottleneck?',
    type: 'multiple_choice',
    category: 'System Understanding',
    options: [
      { value: '1', label: 'Network bandwidth', points: 2 },
      { value: '2', label: 'Memory and computational resources', points: 5 },
      { value: '3', label: 'Storage capacity', points: 1 },
      { value: '4', label: 'Power consumption', points: 4 }
    ]
  },
  {
    id: 'programming_confidence',
    text: 'Rate your confidence in Python programming for ML tasks:',
    type: 'likert',
    category: 'Technical Skills',
    options: [
      { value: '1', label: 'Beginner - Basic syntax only', points: 1 },
      { value: '2', label: 'Novice - Can follow tutorials', points: 2 },
      { value: '3', label: 'Intermediate - Can build simple projects', points: 3 },
      { value: '4', label: 'Advanced - Can optimize and debug complex code', points: 4 },
      { value: '5', label: 'Expert - Can architect ML systems', points: 5 }
    ]
  },
  {
    id: 'embedded_experience',
    text: 'Rate your experience with embedded systems or microcontrollers:',
    type: 'likert',
    category: 'Hardware Knowledge',
    options: [
      { value: '1', label: 'No experience', points: 1 },
      { value: '2', label: 'Basic awareness', points: 2 },
      { value: '3', label: 'Some hobby projects', points: 3 },
      { value: '4', label: 'Professional experience', points: 4 },
      { value: '5', label: 'Extensive expertise', points: 5 }
    ]
  },
  {
    id: 'ml_frameworks',
    text: 'Rate your familiarity with ML optimization frameworks (TensorFlow Lite, ONNX, etc.):',
    type: 'likert',
    category: 'Tools & Frameworks',
    options: [
      { value: '1', label: 'Never heard of them', points: 1 },
      { value: '2', label: 'Know they exist', points: 2 },
      { value: '3', label: 'Basic understanding', points: 3 },
      { value: '4', label: 'Have used them', points: 4 },
      { value: '5', label: 'Proficient user', points: 5 }
    ]
  },
  {
    id: 'performance_debugging',
    text: 'When a model runs slowly on edge hardware, what would you check first?',
    type: 'multiple_choice',
    category: 'Debugging Skills',
    options: [
      { value: '1', label: 'Increase batch size', points: 1 },
      { value: '2', label: 'Profile memory usage and CPU utilization', points: 5 },
      { value: '3', label: 'Try a different model architecture', points: 3 },
      { value: '4', label: 'Add more features to the model', points: 1 }
    ]
  },
  {
    id: 'latency_accuracy_tradeoff',
    text: 'How comfortable are you with making latency vs accuracy tradeoffs?',
    type: 'likert',
    category: 'Engineering Judgment',
    options: [
      { value: '1', label: 'Prefer to avoid tradeoffs', points: 1 },
      { value: '2', label: 'Uncomfortable but willing', points: 2 },
      { value: '3', label: 'Neutral - depends on requirements', points: 3 },
      { value: '4', label: 'Comfortable making informed tradeoffs', points: 4 },
      { value: '5', label: 'Excel at balancing competing constraints', points: 5 }
    ]
  }
];

export const TechnicalSection = ({ onComplete }: TechnicalSectionProps) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    const numericAnswers: Record<string, number> = {};
    Object.entries(answers).forEach(([questionId, selectedValue]) => {
      const question = technicalQuestions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.value === selectedValue);
      numericAnswers[questionId] = option?.points || 0;
    });
    onComplete(numericAnswers);
  };

  const isComplete = Object.keys(answers).length === technicalQuestions.length;
  const progress = (Object.keys(answers).length / technicalQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-secondary-vibrant" />
            Technical & Aptitude Assessment
          </CardTitle>
          <p className="text-muted-foreground">
            These questions evaluate your technical knowledge, problem-solving skills, and domain-specific understanding of Edge AI development.
          </p>
          <div className="w-full bg-progress-bg rounded-full h-2">
            <div 
              className="bg-secondary-vibrant h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardHeader>
      </Card>

      <div className="space-y-6">
        {technicalQuestions.map((question, index) => (
          <Card key={question.id} className="transition-all duration-200 hover:shadow-md">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-secondary-vibrant bg-secondary/20 px-2 py-1 rounded">
                      {question.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Question {index + 1} of {technicalQuestions.length}
                    </span>
                    {question.type === 'multiple_choice' && (
                      <Code className="w-4 h-4 text-secondary-vibrant" />
                    )}
                    {question.type === 'likert' && (
                      <Zap className="w-4 h-4 text-secondary-vibrant" />
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    {question.text}
                  </h3>
                </div>

                <RadioGroup
                  value={answers[question.id] || ''}
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                  className="space-y-3"
                >
                  {question.options.map((option) => (
                    <div key={option.value} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/10 transition-colors">
                      <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} className="mt-0.5" />
                      <Label 
                        htmlFor={`${question.id}-${option.value}`}
                        className="text-sm leading-relaxed cursor-pointer flex-1"
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
          className="bg-gradient-to-r from-secondary-vibrant to-accent-vibrant hover:from-secondary-vibrant/90 hover:to-accent-vibrant/90 text-white px-6 py-3"
        >
          Continue to WISCAR Analysis
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};