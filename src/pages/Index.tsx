import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Target, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-assessment-bg via-background to-secondary/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Career Discovery Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary-vibrant to-accent-vibrant bg-clip-text text-transparent leading-tight">
            Discover Your Edge AI Developer Potential
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Take our comprehensive assessment to determine if you have the psychological alignment, 
            technical readiness, and career motivation to excel in Edge AI development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary-vibrant hover:from-primary-dark hover:to-secondary-vibrant/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-primary transition-all duration-300"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Career Assessment</h2>
            <p className="text-muted-foreground text-lg">
              Our scientifically-backed assessment evaluates multiple dimensions of your readiness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Psychometric Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Assess personality traits, grit, growth mindset, and cognitive style using validated psychological frameworks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Big Five Personality Traits
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Grit & Persistence Scale
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Growth Mindset Indicators
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-secondary/10 hover:border-secondary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Cpu className="w-8 h-8 text-secondary-vibrant" />
                </div>
                <CardTitle>Technical Readiness</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Evaluate your programming skills, domain knowledge, and problem-solving abilities specific to Edge AI.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Programming Aptitude
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    ML & Optimization Knowledge
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Hardware Understanding
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-accent/10 hover:border-accent/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Target className="w-8 h-8 text-accent-vibrant" />
                </div>
                <CardTitle>WISCAR Framework</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Comprehensive analysis across six key dimensions: Will, Interest, Skill, Cognitive, Ability, Reality.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Holistic Evaluation
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Career Alignment
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Learning Pathway
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What You'll Receive</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Zap className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Personalized Results</h3>
                <p className="text-muted-foreground">
                  Detailed scoring across all assessment dimensions with clear explanations of your strengths and areas for growth.
                </p>
              </div>
              
              <div className="space-y-4">
                <Users className="w-12 h-12 text-secondary-vibrant mx-auto" />
                <h3 className="text-xl font-semibold">Career Guidance</h3>
                <p className="text-muted-foreground">
                  Specific job roles, learning pathways, and next steps tailored to your assessment results and career goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Ready to Discover Your Potential?</h2>
          <p className="text-muted-foreground text-lg">
            Take the first step towards your Edge AI development career. Our assessment takes just 10-15 minutes.
          </p>
          
          <Link to="/assessment">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent-vibrant hover:from-primary-dark hover:to-accent-vibrant/90 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-primary transition-all duration-300"
            >
              Start Your Assessment
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            No registration required • Free assessment • Instant results
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
