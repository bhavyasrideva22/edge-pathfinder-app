import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Target, ArrowRight, Zap, Brain, Users, Eye, BookOpen, Settings } from "lucide-react";

interface WiscarSectionProps {
  onComplete: (data: Record<string, number>) => void;
}

const wiscarQuestions = [
  // Will (Drive + Persistence)
  {
    id: 'will_troubleshooting',
    text: 'I excel in troubleshooting real-time embedded issues and persist until resolved.',
    category: 'Will',
    icon: Zap,
    dimension: 'Drive & Persistence'
  },
  {
    id: 'will_optimization',
    text: 'I am driven to optimize every aspect of system performance.',
    category: 'Will',
    icon: Zap,
    dimension: 'Drive & Persistence'
  },
  
  // Interest (Curious about Edge AI)
  {
    id: 'interest_innovations',
    text: 'I actively follow innovations in TinyML and hardware acceleration.',
    category: 'Interest',
    icon: Eye,
    dimension: 'Domain Curiosity'
  },
  {
    id: 'interest_constraints',
    text: 'I find resource constraints intellectually stimulating rather than frustrating.',
    category: 'Interest',
    icon: Eye,
    dimension: 'Domain Curiosity'
  },
  
  // Skill (Technical Fit)
  {
    id: 'skill_compression',
    text: 'Rate your confidence in model compression techniques (pruning, quantization):',
    category: 'Skill',
    icon: Settings,
    dimension: 'Technical Competence',
    type: 'skill_rating'
  },
  {
    id: 'skill_embedded',
    text: 'Rate your ability to work with embedded platforms and microcontrollers:',
    category: 'Skill',
    icon: Settings,
    dimension: 'Technical Competence',
    type: 'skill_rating'
  },
  
  // Cognitive (Problem-solving + Systems View)
  {
    id: 'cognitive_systems',
    text: 'I naturally think about how different system components interact and affect each other.',
    category: 'Cognitive',
    icon: Brain,
    dimension: 'Systems Thinking'
  },
  {
    id: 'cognitive_tradeoffs',
    text: 'I can quickly analyze complex tradeoffs between accuracy, latency, and power consumption.',
    category: 'Cognitive',
    icon: Brain,
    dimension: 'Systems Thinking'
  },
  
  // Ability to Learn (Adaptability)
  {
    id: 'ability_iteration',
    text: 'I iterate until results improve incrementally, even with small gains.',
    category: 'Ability',
    icon: BookOpen,
    dimension: 'Learning Adaptability'
  },
  {
    id: 'ability_new_tools',
    text: 'I quickly adapt to new optimization tools and frameworks.',
    category: 'Ability',
    icon: BookOpen,
    dimension: 'Learning Adaptability'
  },
  
  // Real-World Alignment (Job Realism)
  {
    id: 'reality_constraints',
    text: 'Scenario: Your model works perfectly in simulation but fails on actual hardware due to memory constraints. This type of challenge:',
    category: 'Reality',
    icon: Users,
    dimension: 'Job Realism',
    type: 'scenario',
    options: [
      { value: '1', label: 'Would be extremely frustrating and discouraging', points: 1 },
      { value: '2', label: 'Would be challenging but manageable', points: 3 },
      { value: '3', label: 'Would be an interesting puzzle to solve', points: 5 },
      { value: '4', label: 'Is exactly the type of problem I enjoy most', points: 5 }
    ]
  },
  {
    id: 'reality_deadlines',
    text: 'Working under tight deadlines to optimize model performance for production deployment:',
    category: 'Reality',
    icon: Users,
    dimension: 'Job Realism',
    type: 'scenario',
    options: [
      { value: '1', label: 'Would cause me significant stress', points: 1 },
      { value: '2', label: 'I could handle but would prefer more time', points: 2 },
      { value: '3', label: 'I work well under pressure', points: 4 },
      { value: '4', label: 'I thrive in fast-paced, deadline-driven environments', points: 5 }
    ]
  }
];

const likertOptions = [
  { value: '1', label: 'Strongly Disagree', points: 1 },
  { value: '2', label: 'Disagree', points: 2 },
  { value: '3', label: 'Neutral', points: 3 },
  { value: '4', label: 'Agree', points: 4 },
  { value: '5', label: 'Strongly Agree', points: 5 }
];

const skillRatingOptions = [
  { value: '1', label: 'No knowledge', points: 1 },
  { value: '2', label: 'Basic awareness', points: 2 },
  { value: '3', label: 'Some experience', points: 3 },
  { value: '4', label: 'Confident application', points: 4 },
  { value: '5', label: 'Expert level', points: 5 }
];

export const WiscarSection = ({ onComplete }: WiscarSectionProps) => {
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
      const question = wiscarQuestions.find(q => q.id === questionId);
      
      if (question?.type === 'scenario') {
        const option = question.options?.find(o => o.value === selectedValue);
        numericAnswers[questionId] = option?.points || 0;
      } else if (question?.type === 'skill_rating') {
        const option = skillRatingOptions.find(o => o.value === selectedValue);
        numericAnswers[questionId] = option?.points || 0;
      } else {
        const option = likertOptions.find(o => o.value === selectedValue);
        numericAnswers[questionId] = option?.points || 0;
      }
    });
    onComplete(numericAnswers);
  };

  const isComplete = Object.keys(answers).length === wiscarQuestions.length;
  const progress = (Object.keys(answers).length / wiscarQuestions.length) * 100;

  const getQuestionOptions = (question: any) => {
    if (question.type === 'scenario') return question.options;
    if (question.type === 'skill_rating') return skillRatingOptions;
    return likertOptions;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-accent-vibrant" />
            WISCAR Framework Analysis
          </CardTitle>
          <p className="text-muted-foreground">
            Evaluating six key readiness dimensions: Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment.
          </p>
          <div className="w-full bg-progress-bg rounded-full h-2">
            <div 
              className="bg-accent-vibrant h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardHeader>
      </Card>

      <div className="space-y-6">
        {wiscarQuestions.map((question, index) => {
          const IconComponent = question.icon;
          return (
            <Card key={question.id} className="transition-all duration-200 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="w-4 h-4 text-accent-vibrant" />
                      <span className="text-sm font-medium text-accent-vibrant bg-accent/20 px-2 py-1 rounded">
                        {question.category} - {question.dimension}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Question {index + 1} of {wiscarQuestions.length}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-foreground">
                      {question.text}
                    </h3>
                  </div>

                  <RadioGroup
                    value={answers[question.id] || ''}
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                    className={question.type === 'scenario' ? 'space-y-3' : 'grid grid-cols-1 md:grid-cols-5 gap-4'}
                  >
                    {getQuestionOptions(question).map((option: any) => (
                      <div key={option.value} className={`flex items-center space-x-2 ${question.type === 'scenario' ? 'p-3 rounded-lg hover:bg-accent/10 transition-colors' : ''}`}>
                        <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                        <Label 
                          htmlFor={`${question.id}-${option.value}`}
                          className={`cursor-pointer ${question.type === 'scenario' ? 'text-sm leading-relaxed flex-1' : 'text-sm leading-tight'}`}
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-end pt-6">
        <Button 
          onClick={handleSubmit}
          disabled={!isComplete}
          className="bg-gradient-to-r from-accent-vibrant to-primary hover:from-accent-vibrant/90 hover:to-primary/90 text-white px-6 py-3"
        >
          Complete Assessment
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};