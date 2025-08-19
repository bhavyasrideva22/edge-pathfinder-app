import { Progress } from "@/components/ui/progress";
import { Brain, Cpu, Target, CheckCircle } from "lucide-react";

interface AssessmentProgressProps {
  progress: number;
  currentSection: string;
}

export const AssessmentProgress = ({ progress, currentSection }: AssessmentProgressProps) => {
  const sections = [
    { id: 'psychometric', label: 'Psychometric', icon: Brain },
    { id: 'technical', label: 'Technical', icon: Cpu },
    { id: 'wiscar', label: 'WISCAR', icon: Target },
  ];

  return (
    <div className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Edge AI Developer Assessment</h2>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
        </div>
        
        <Progress value={progress} className="mb-4" />
        
        <div className="flex items-center justify-between">
          {sections.map((section, index) => {
            const isCompleted = sections.findIndex(s => s.id === currentSection) > index;
            const isCurrent = section.id === currentSection;
            
            return (
              <div key={section.id} className="flex items-center gap-2">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center transition-colors
                  ${isCompleted ? 'bg-success text-white' : 
                    isCurrent ? 'bg-primary text-white' : 
                    'bg-muted text-muted-foreground'}
                `}>
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <section.icon className="w-4 h-4" />
                  )}
                </div>
                <span className={`
                  text-sm font-medium hidden sm:inline
                  ${isCurrent ? 'text-primary' : 
                    isCompleted ? 'text-success' : 
                    'text-muted-foreground'}
                `}>
                  {section.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};