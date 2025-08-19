import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Cpu, 
  Target, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Download
} from "lucide-react";
import type { AssessmentData } from "@/pages/Assessment";

interface AssessmentResultsProps {
  assessmentData: AssessmentData;
}

interface ScoreBreakdown {
  psychometricFit: number;
  technicalReadiness: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    reality: number;
  };
  overallScore: number;
  recommendation: 'Yes' | 'Maybe' | 'Not Yet';
}

export const AssessmentResults = ({ assessmentData }: AssessmentResultsProps) => {
  const scores: ScoreBreakdown = useMemo(() => {
    // Calculate psychometric fit (0-100)
    const psychometricValues = Object.values(assessmentData.psychometricAnswers);
    const psychometricAvg = psychometricValues.reduce((sum, val) => sum + val, 0) / psychometricValues.length;
    const psychometricFit = Math.round((psychometricAvg / 5) * 100);

    // Calculate technical readiness (0-100)
    const technicalValues = Object.values(assessmentData.technicalAnswers);
    const technicalSum = technicalValues.reduce((sum, val) => sum + val, 0);
    const technicalMax = technicalValues.length * 5; // Assuming max 5 points per question
    const technicalReadiness = Math.round((technicalSum / technicalMax) * 100);

    // Calculate WISCAR scores
    const wiscarValues = Object.values(assessmentData.wiscarAnswers);
    const wiscarAvg = wiscarValues.reduce((sum, val) => sum + val, 0) / wiscarValues.length;
    
    // Map specific questions to WISCAR dimensions (simplified)
    const wiscarScores = {
      will: Math.round((wiscarAvg / 5) * 100),
      interest: Math.round((wiscarAvg / 5) * 100),
      skill: Math.round((wiscarAvg / 5) * 100),
      cognitive: Math.round((wiscarAvg / 5) * 100),
      ability: Math.round((wiscarAvg / 5) * 100),
      reality: Math.round((wiscarAvg / 5) * 100)
    };

    // Calculate overall score
    const overallScore = Math.round((psychometricFit + technicalReadiness + wiscarAvg * 20) / 3);

    // Determine recommendation
    let recommendation: 'Yes' | 'Maybe' | 'Not Yet';
    if (overallScore >= 80) recommendation = 'Yes';
    else if (overallScore >= 60) recommendation = 'Maybe';
    else recommendation = 'Not Yet';

    return {
      psychometricFit,
      technicalReadiness,
      wiscarScores,
      overallScore,
      recommendation
    };
  }, [assessmentData]);

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'Yes': return 'text-success bg-success/10 border-success/20';
      case 'Maybe': return 'text-warning bg-warning/10 border-warning/20';
      case 'Not Yet': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getNextSteps = () => {
    if (scores.recommendation === 'Yes') {
      return [
        "Engage in TensorFlow Lite and TinyML courses",
        "Start hands-on projects with Raspberry Pi or Arduino",
        "Build a computer vision model for edge deployment",
        "Join Edge AI communities and forums"
      ];
    } else if (scores.recommendation === 'Maybe') {
      return [
        "Build foundational experience with microcontroller projects",
        "Complete an embedded ML fundamentals course",
        "Practice model optimization techniques",
        "Develop stronger programming skills in C++ or Python"
      ];
    } else {
      return [
        "Start with basic programming and ML fundamentals",
        "Take an introduction to embedded systems course",
        "Build confidence with hands-on electronics projects",
        "Consider IoT development as a stepping stone"
      ];
    }
  };

  const getCareerRoles = () => {
    if (scores.recommendation === 'Yes') {
      return [
        "Edge AI Developer / Engineer",
        "Embedded ML Specialist",
        "TinyML Developer",
        "Edge AI Systems Architect"
      ];
    } else if (scores.recommendation === 'Maybe') {
      return [
        "Junior ML Engineer (Cloud-native)",
        "IoT Developer",
        "Embedded Systems Developer",
        "ML Engineering Intern"
      ];
    } else {
      return [
        "Software Developer",
        "Data Analyst",
        "IoT Technician",
        "Technical Support Engineer"
      ];
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
          <Award className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Assessment Complete</span>
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary-vibrant to-accent-vibrant bg-clip-text text-transparent">
          Your Edge AI Developer Assessment Results
        </h1>
      </div>

      {/* Overall Score Card */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Overall Confidence Score</CardTitle>
          <div className="text-6xl font-bold text-primary">{scores.overallScore}/100</div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <Badge className={`text-lg px-4 py-2 ${getRecommendationColor(scores.recommendation)}`}>
            Recommendation: {scores.recommendation}
          </Badge>
          
          {scores.recommendation === 'Yes' && (
            <p className="text-muted-foreground">
              You have the mindset and analytical readiness for Edge AI development. Start with TinyML courses and hands-on embedded projects.
            </p>
          )}
          
          {scores.recommendation === 'Maybe' && (
            <p className="text-muted-foreground">
              You show strong potential. Build more experience through courses and microcontroller prototypes to reach job readiness.
            </p>
          )}
          
          {scores.recommendation === 'Not Yet' && (
            <p className="text-muted-foreground">
              Focus on building foundational skills in programming and embedded systems before pursuing Edge AI development.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Detailed Scores */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Psychometric Fit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{scores.psychometricFit}/100</span>
                {scores.psychometricFit >= 70 ? (
                  <CheckCircle className="w-6 h-6 text-success" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-warning" />
                )}
              </div>
              <Progress value={scores.psychometricFit} />
              <p className="text-sm text-muted-foreground">
                Your personality traits, persistence, and cognitive style alignment with successful Edge AI developers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-secondary-vibrant" />
              Technical Readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-secondary-vibrant">{scores.technicalReadiness}/100</span>
                {scores.technicalReadiness >= 70 ? (
                  <CheckCircle className="w-6 h-6 text-success" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-warning" />
                )}
              </div>
              <Progress value={scores.technicalReadiness} />
              <p className="text-sm text-muted-foreground">
                Your current technical knowledge and problem-solving skills in Edge AI domain.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent-vibrant" />
              WISCAR Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(scores.wiscarScores).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm capitalize">{key}</span>
                  <span className="text-sm font-medium">{value}/100</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Path & Career Guidance */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Your Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {getNextSteps().map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-vibrant mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary-vibrant" />
              Suitable Career Paths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {getCareerRoles().map((role, index) => (
                <Badge key={index} variant="secondary" className="block w-fit">
                  {role}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button 
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download Report
        </Button>
        
        <Button 
          className="bg-gradient-to-r from-primary to-secondary-vibrant hover:from-primary-dark hover:to-secondary-vibrant/90 text-white flex items-center gap-2"
        >
          <TrendingUp className="w-4 h-4" />
          Start Learning Path
        </Button>
      </div>
    </div>
  );
};