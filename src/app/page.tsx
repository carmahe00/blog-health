"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import ToutContent from "./components/ToutContent";
import ToutOverlap from "./components/ToutOverlap";
import BigTextLittleText from "./components/BigTextLittleText";
import VerticalLine from "./components/VerticalLine";
import CardCollection from "./components/CardCollection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <ParallaxProvider>
        <NavBar />
        <div className="w-screen h-screen page-hero"  >
          <div className="flex w-full h-full relative">
            <Parallax translateX={[-100, 0]} className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/tiger.svg"
                alt="Hero-Image"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-1000 ease-in-out transform"
              />
            </Parallax>
            <Parallax translateX={[100, 0]} className="absolute top-0 right-0 -z-1 w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/lion.png"
                alt="Hero-Image"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-1000 ease-in-out transform"
              />
            </Parallax>
          </div>  
        </div>
        <ToutContent textDirection="toutContent w-full my-0 mb-4 mx-auto py-20 sm:py-0  flex flex-col-reverse sm:flex-row text-left sm:text-right" />
        <ToutContent title="Balanced Diet" advices={["Eat a variety of foods", "Portion control", "Stay hydrated"]} textDirection="toutContent w-full my-0 mb-4 mx-auto py-20 sm:py-0  text-left flex flex-col-reverse sm:flex-row-reverse" />
        <div className="bg-green w-full">
          <ToutContent title="Get Enough Sleep" advices={["7-9 hours of sleep", "Sleep routine"]} textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row text-left sm:text-right bg-green" />
        </div>
        <div className="bg-purple w-full">
          <ToutContent title="Manage Stress" advices={["Practice mindfulness", "Stay social"]} textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row-reverse text-left bg-purple" />
        </div>

        <div className="w-full toutContent mx-auto">
          <ToutOverlap
            content="refers to the practice of incorporating regular movement and physical activity into your daily routine, beyond just formal exercise sessions. This habit is crucial for maintaining overall health, energy levels, and preventing the negative effects of prolonged sitting or inactivity."
            title="Stay Active Throughout the Day"
            toutOverlapContent="tout-overlap mx-auto my-0 bg-left"
            totuOverlapText="toutCopy--overlap w-full ml-auto sm:w-1/2 bg-green"
          />
        </div>
        <BigTextLittleText />
        <VerticalLine />
        <ToutOverlap
          title="Limit Processed Foods and Sugars"
          content="is an essential habit for maintaining a healthy diet and preventing chronic health issues. Processed foods often contain added sugars, unhealthy fats, and artificial ingredients that can be detrimental to your health if consumed in excess."
          toutOverlapContent="toutContent w-full tout-overlap mx-auto my-0 bg-right "
          totuOverlapText="toutCopy--overlap mr-auto w-full sm:w-1/2 bg-orange"
        />

        <div className="flex w-full">
          <CardCollection />
        </div>
      </ParallaxProvider>
    </main>
  );
}
