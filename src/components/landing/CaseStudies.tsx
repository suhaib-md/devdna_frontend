"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "DevDNA has transformed our project management. The AI-driven insights allow us to allocate resources with surgical precision, boosting our productivity by over 30%.",
    name: "Alex Johnson",
    title: "CTO, Innovatech",
    avatar: "AJ",
  },
  {
    quote: "The developer profiling is a game-changer. We now have a clear, objective view of everyone's strengths, leading to better team composition and happier, more engaged engineers.",
    name: "Samantha Lee",
    title: "VP of Engineering, CodeHarbor",
    avatar: "SL",
  },
  {
    quote: "I was skeptical about automated tracking, but DevDNA's seamless integration proved me wrong. It provides incredible visibility without any of the administrative overhead.",
    name: "Michael Chen",
    title: "Project Manager, TechSolutions",
    avatar: "MC",
  },
  {
    quote: "The ability to match developers to projects based on their skills and growth goals has been invaluable for talent retention. Our team feels more valued and challenged.",
    name: "Emily Rodriguez",
    title: "Director of R&D, FutureSys",
    avatar: "ER",
  },
];

const CaseStudies = () => {
  return (
    <motion.section 
      id="testimonials" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Trusted by Industry Leaders</h2>
          <p className="text-lg text-neutral-400 mt-4 max-w-3xl mx-auto">
            See how DevDNA is helping teams build better software, faster.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between p-6 bg-neutral-900 border-neutral-800">
                    <CardContent className="p-0 flex-grow">
                      <p className="text-lg text-white mb-6">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-4">
                      <Avatar>
                         <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} />
                         <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-neutral-400">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-neutral-800 text-white border-neutral-700 hover:bg-neutral-700" />
          <CarouselNext className="hidden md:flex bg-neutral-800 text-white border-neutral-700 hover:bg-neutral-700" />
        </Carousel>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
