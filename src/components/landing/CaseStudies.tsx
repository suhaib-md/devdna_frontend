"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import TiltedCard from "@/components/ui/TiltedCard";
import { Card, CardContent } from "@/components/ui/card";
import testimonials from "@/data/testimonials.json";

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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Trusted by Industry Leaders</h2>
          <p className="text-lg text-neutral-400 mt-4 max-w-3xl mx-auto">
            See how DevDNA is helping teams build better software, faster.
          </p>
        </div>
        
        {/* Centered carousel with buttons below */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <TiltedCard>
                      <Card className="h-full flex flex-col justify-between p-6 bg-neutral-900 border-neutral-800">
                        <CardContent className="p-0 text-left">
                          <p className="text-lg text-white mb-6 flex-grow">"{testimonial.quote}"</p>
                          <div className="flex items-center gap-4 mt-auto">
                              <Avatar>
                                  <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} />
                                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                              </Avatar>
                              <div>
                                  <p className="font-semibold text-white">{testimonial.name}</p>
                                  <p className="text-sm text-neutral-400">{testimonial.title}</p>
                              </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TiltedCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation buttons below carousel - inside Carousel component */}
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-neutral-800 text-white border-neutral-700 hover:bg-neutral-700" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-neutral-800 text-white border-neutral-700 hover:bg-neutral-700" />
            </div>
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;