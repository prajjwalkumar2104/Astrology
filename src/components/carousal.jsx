import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Daily Horoscope",
    description:
      "Receive personalized cosmic guidance every morning. Understand how planetary shifts in your Rashi influence your mood, career, and relationships for the next 24 hours.",
    image: "/sun-icon.png", // Make sure these are in your /public folder
    bgimage: "/consultation.png",
  },
  {
    title: "Personal Consultation",
    description:
      "Book a one-on-one session with our expert Vedic astrologers. Deep dive into your birth chart (Janam Kundli) to resolve life’s most complex questions.",
    image: "/eye-icon.png",
    bgimage: "/consultation.png",
  },
  {
    title: "Kundli Dosha",
    description:
      "Identify and mitigate planetary imbalances like Mangal or Kalsarpa Dosha. Learn specific Upayas (remedies) to bring peace and prosperity back into your life.",
    image: "/star-icon.png",
    bgimage: "/consultation.png",
  },
];

export function CarouselSize() {
  return (
    <div className=" k py-20 w-full">
      {" "}
      {/* Dark background like your image */}
      <Carousel opts={{ align: "start" }} className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4 flex flex-col items-center gap-6">
                {/* THE WHITE CARD */}
                <Card className="bg-white/90 backdrop-blur-sm border-none rounded-sm w-full hover:scale-103 transition-all duration-300 ease-out">
                  <img
                    src={service.bgimage}
                    className="absolute inset-0 w-full h-full object-cover -z-20 bg-black/50 opacity-75"
                  />
                  <CardContent className="flex flex-col items-center p-10 text-center">
                    <div className="relative w-32 h-32 mb-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {service.title}
                    </h3>
                    <p className="text-black text-sm">{service.description}</p>
                  </CardContent>
                </Card>

                {/* THE EXTERNAL BUTTON */}
                <button className="border-2 border-white text-white px-10 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                  View More
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
