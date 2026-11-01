"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
  if (process.env.NODE_ENV !== "production") {
    (window as unknown as { __gsap: typeof gsap; __ScrollTrigger: typeof ScrollTrigger }).__gsap = gsap;
    (window as unknown as { __gsap: typeof gsap; __ScrollTrigger: typeof ScrollTrigger }).__ScrollTrigger = ScrollTrigger;
  }
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
