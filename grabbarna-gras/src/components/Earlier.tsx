"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function Earlier() {
  return (
    <Carousel className="w-2/3 lg:w-1/3">
      <CarouselContent className="">
        <CarouselItem className="">
          <img className="w-full rounded-lg" src="/images/ex1.jpg" />
        </CarouselItem>
        <CarouselItem className="">
          <img className="w-full rounded-lg" src="/images/ex2.jpg" />
        </CarouselItem>
        <CarouselItem className="">
          <img className="w-full rounded-lg" src="/images/ex3.jpg" />
        </CarouselItem>
        <CarouselItem className="">
          <img className="w-full rounded-lg" src="/images/ex4.jpg" />
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}

export default Earlier;
