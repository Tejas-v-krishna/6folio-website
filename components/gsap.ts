"use client";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Flip, ScrollTrigger, SplitText, useGSAP);
}

export { Flip, gsap, ScrollTrigger, SplitText, useGSAP };
