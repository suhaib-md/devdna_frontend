"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getInsight } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  text: z.string().min(50, {
    message: "Please enter at least 50 characters to generate a meaningful summary.",
  }).max(5000, {
    message: "Text cannot exceed 5000 characters.",
  }),
});

const ChatbotAssistant = () => {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSummary(null);

    const result = await getInsight(values.text);

    setIsLoading(false);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    } else {
      setSummary(result.summary);
    }
  }

  return (
    <section id="ai-tool" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">AI-Powered Insight Generation</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Experience the power of DevDNA's AI. Provide text about developer profiling or skills management, and our tool will generate a concise summary for a project manager's briefing book.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="bg-card/80 border-border/60">
            <CardHeader>
              <CardTitle>Generate a Summary</CardTitle>
              <CardDescription>Enter the text you want to summarize below.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Text to Summarize</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste your text here... for example, a long email thread, a document excerpt, or meeting notes."
                            className="min-h-[200px] text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full group">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    )}
                    Generate Summary
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center">
            {isLoading ? (
                <Card className="w-full min-h-[300px] flex flex-col items-center justify-center bg-card/80 border-border/60 border-dashed">
                    <Loader2 className="h-12 w-12 text-primary animate-spin" />
                    <p className="text-muted-foreground mt-4">Generating insights...</p>
                </Card>
            ) : summary ? (
              <Card className="w-full min-h-[300px] bg-gradient-to-br from-card to-card/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <FileText className="h-5 w-5" />
                    Generated Briefing Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground whitespace-pre-wrap">{summary}</p>
                </CardContent>
              </Card>
            ) : (
                <Card className="w-full min-h-[300px] flex flex-col items-center justify-center bg-card/30 border-border/60 border-dashed">
                    <div className="text-center text-muted-foreground">
                        <Wand2 className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                        <p>Your AI-generated summary will appear here.</p>
                    </div>
                </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotAssistant;
