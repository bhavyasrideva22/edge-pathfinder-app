import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Zap, Target, Users, Shield } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
          <Cpu className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Career Assessment</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary-vibrant to-accent-vibrant bg-clip-text text-transparent">
          Should I Become an Edge AI Developer?
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover if you have the psychological alignment, technical readiness, and career motivation to excel in Edge AI development.
        </p>
      </div>

      {/* What is Edge AI Development */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            What is Edge AI Development?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Edge AI Development involves designing, optimizing, and deploying AI models to run efficiently on 
            resource-constrained devices like smartphones, embedded systems, and IoT hardware. You'll work with 
            real-time constraints, power limitations, and performance optimization challenges.
          </p>
        </CardContent>
      </Card>

      {/* Roles Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-secondary-vibrant" />
              Roles You Could Pursue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Edge AI Developer / Engineer",
              "Embedded AI Specialist", 
              "Machine Learning Engineer (Edge Focus)",
              "IoT Intelligence Architect",
              "Hardware-Aware AI Engineer"
            ].map((role, index) => (
              <Badge key={index} variant="secondary" className="block w-fit">
                {role}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent-vibrant" />
              Key Success Traits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { icon: Users, text: "Systems thinking across software and hardware" },
              { icon: Zap, text: "Performance and optimization focus" },
              { icon: Brain, text: "Strong debugging and analytical skills" },
              { icon: Target, text: "Persistence and detail orientation" },
              { icon: Shield, text: "Ethical awareness for autonomous systems" }
            ].map((trait, index) => (
              <div key={index} className="flex items-center gap-2">
                <trait.icon className="w-4 h-4 text-accent-vibrant" />
                <span className="text-sm text-muted-foreground">{trait.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Assessment Overview */}
      <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
        <CardHeader>
          <CardTitle>Assessment Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Psychometric Analysis</h3>
              <p className="text-sm text-muted-foreground">Personality traits, grit, and cognitive style</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-secondary-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Cpu className="w-6 h-6 text-secondary-vibrant" />
              </div>
              <h3 className="font-semibold mb-1">Technical Readiness</h3>
              <p className="text-sm text-muted-foreground">Programming skills and domain knowledge</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="w-6 h-6 text-accent-vibrant" />
              </div>
              <h3 className="font-semibold mb-1">WISCAR Framework</h3>
              <p className="text-sm text-muted-foreground">Will, Interest, Skill, Cognitive, Ability, Reality</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Start Button */}
      <div className="text-center">
        <Button 
          onClick={onStart}
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary-vibrant hover:from-primary-dark hover:to-secondary-vibrant/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-primary transition-all duration-300"
        >
          Start Assessment
          <Zap className="w-5 h-5 ml-2" />
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Takes approximately 10-15 minutes to complete
        </p>
      </div>
    </div>
  );
};