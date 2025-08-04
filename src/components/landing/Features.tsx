import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, UserCheck, BarChart3, GitMerge, Sparkles, Bot } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Automated Performance Tracking",
    description: "Eliminates manual reporting with comprehensive activity visibility from integrated platforms.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Intelligent Developer Profiling",
    description: "Creates detailed skill profiles based on actual code contributions and work patterns.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Data-Driven Project Management",
    description: "Enables objective decision-making for project assignments and resource allocation.",
  },
  {
    icon: <GitMerge className="h-8 w-8 text-primary" />,
    title: "Seamless Integration",
    description: "Works with your existing tools like GitHub, JIRA, and Confluence without disrupting workflows.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "AI-Powered Insights",
    description: "Provides actionable recommendations through advanced analytics and natural language processing.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Continuous Learning Tracking",
    description: "Monitors skill development and adaptation to new technologies over time.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-card/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why DevDNA?</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Discover the core functionalities that make DevDNA an indispensable tool for modern software development teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border/60 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1 group">
              <CardHeader>
                <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                <CardDescription className="pt-2 text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
