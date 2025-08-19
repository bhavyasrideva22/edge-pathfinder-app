import { useState } from "react";
import { AssessmentIntro } from "@/components/assessment/AssessmentIntro";
import { PsychometricSection } from "@/components/assessment/PsychometricSection";
import { TechnicalSection } from "@/components/assessment/TechnicalSection";
import { WiscarSection } from "@/components/assessment/WiscarSection";
import { AssessmentResults } from "@/components/assessment/AssessmentResults";
import { AssessmentProgress } from "@/components/assessment/AssessmentProgress";

export type AssessmentData = {
  psychometricAnswers: Record<string, number>;
  technicalAnswers: Record<string, number>;
  wiscarAnswers: Record<string, number>;
  demographics?: Record<string, string>;
};

const Assessment = () => {
  const [currentSection, setCurrentSection] = useState<'intro' | 'psychometric' | 'technical' | 'wiscar' | 'results'>('intro');
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    psychometricAnswers: {},
    technicalAnswers: {},
    wiscarAnswers: {},
    demographics: {}
  });

  const sections = ['intro', 'psychometric', 'technical', 'wiscar', 'results'];
  const currentIndex = sections.indexOf(currentSection);
  const progress = ((currentIndex + 1) / sections.length) * 100;

  const handleSectionComplete = (section: keyof AssessmentData, data: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [section]: data
    }));
    
    const sectionOrder = ['psychometric', 'technical', 'wiscar'];
    const currentSectionIndex = sectionOrder.indexOf(section as string);
    
    if (currentSectionIndex < sectionOrder.length - 1) {
      setCurrentSection(sectionOrder[currentSectionIndex + 1] as any);
    } else {
      setCurrentSection('results');
    }
  };

  const startAssessment = () => {
    setCurrentSection('psychometric');
  };

  return (
    <div className="min-h-screen bg-assessment-bg">
      {currentSection !== 'intro' && currentSection !== 'results' && (
        <AssessmentProgress progress={progress} currentSection={currentSection} />
      )}
      
      <div className="container mx-auto px-4 py-8">
        {currentSection === 'intro' && (
          <AssessmentIntro onStart={startAssessment} />
        )}
        
        {currentSection === 'psychometric' && (
          <PsychometricSection 
            onComplete={(data) => handleSectionComplete('psychometricAnswers', data)}
          />
        )}
        
        {currentSection === 'technical' && (
          <TechnicalSection 
            onComplete={(data) => handleSectionComplete('technicalAnswers', data)}
          />
        )}
        
        {currentSection === 'wiscar' && (
          <WiscarSection 
            onComplete={(data) => handleSectionComplete('wiscarAnswers', data)}
          />
        )}
        
        {currentSection === 'results' && (
          <AssessmentResults assessmentData={assessmentData} />
        )}
      </div>
    </div>
  );
};

export default Assessment;