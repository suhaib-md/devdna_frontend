import { ShieldCheck, GitBranch, DatabaseZap, Workflow } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const securityFeatures = [
    {
        icon: <ShieldCheck className="w-6 h-6 text-primary"/>,
        title: "Data Integrity First",
        description: "Project managers and developers cannot directly modify data through dashboards, ensuring data integrity and preventing manipulation."
    },
    {
        icon: <GitBranch className="w-6 h-6 text-primary"/>,
        title: "Single Source of Truth",
        description: "All modifications must be made through original sources (GitHub, JIRA, Confluence) to maintain audit trails and system accuracy."
    },
    {
        icon: <DatabaseZap className="w-6 h-6 text-primary"/>,
        title: "Real-time Synchronization",
        description: "DevDNA processes and reflects changes made in integrated systems, providing a unified view while preserving source system authority."
    },
    {
        icon: <Workflow className="w-6 h-6 text-primary"/>,
        title: "Accuracy Optimization",
        description: "Our models learn from contextual edits in source tools, continuously improving AI analysis accuracy and recommendations."
    }
]

const Security = () => {
    return (
        <section id="security" className="py-20 md:py-28 bg-card/50">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Your Data, Secured and Unaltered</h2>
                    <p className="text-lg text-muted-foreground mt-4">
                        DevDNA operates on a read-only philosophy. We believe in maintaining the integrity of your source data. Our platform provides powerful insights without ever compromising the single source of truth established in your existing development tools.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {securityFeatures.map((feature) => (
                        <div key={feature.title} className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground mt-1">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Security;
