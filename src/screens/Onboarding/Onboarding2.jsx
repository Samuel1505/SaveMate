import {
    ArrowRightCircleIcon,
    BatteryChargingIcon,
    SignalHighIcon,
    WifiHighIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  
  const onboardingSlides = [
    {
      title: "The No #1 cooperative society gone Digital.",
      description:
        "We are committed to improving individual savings and investment habits.",
    },
    {
      title: "Double your financial capacity",
      description:
        "We inject saving habits to the current system by creating easy and fair saving plans that would be favorable to our customers.",
    },
    {
      title: "Start saving for a better tomorrow",
      description:
        "Use Cloud Cooperative to plan towards your dream home, kid's education and travel the world.",
    },
  ];
  
  export const Onboarding = () => {
    const currentSlide = 1; // This would normally be managed with state
  
    return (
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[390px] h-[844px] relative overflow-hidden">
          {/* Status Bar */}
          <div className="fixed w-[390px] h-[34px] top-0 left-0 flex justify-between items-center px-6 py-2">
            <div className="flex items-center gap-1">
              <SignalHighIcon className="h-2.5 w-[15px]" />
              <WifiHighIcon className="h-2.5 w-3.5" />
              <BatteryChargingIcon className="h-2.5 w-[22px]" />
            </div>
          </div>
  
          {/* Skip Button */}
          <Button
            variant="link"
            className="absolute top-[65px] right-[24px] text-primary-color font-bold"
          >
            Skip
          </Button>
  
          {/* Main Illustration */}
          <div className="mt-[194px] flex justify-center">
            <img
              src="https://c.animaapp.com/oKkiYXdy/img/illustr.png"
              alt="Financial Illustration"
              className="w-[236px] h-44"
            />
          </div>
  
          {/* Content Card */}
          <Card className="border-none shadow-none">
            <CardContent className="mt-[51px] px-6">
              <h2 className="text-lg font-bold text-tertiary-color text-center mb-4">
                {onboardingSlides[currentSlide].title}
              </h2>
              <p className="text-sm text-tertiary-color text-center">
                {onboardingSlides[currentSlide].description}
              </p>
            </CardContent>
          </Card>
  
          {/* Progress Dots */}
          <div className="absolute w-[86px] h-2.5 top-[575px] left-[152px] flex gap-2">
            <div className="w-2.5 h-2.5 rounded-xl bg-accent" />
            <div className="w-[50px] h-2.5 rounded-xl bg-primary-color" />
            <div className="w-2.5 h-2.5 rounded-xl bg-accent" />
          </div>
  
          {/* Next Button */}
          <Button className="absolute w-[164px] h-[52px] top-[673px] left-[113px] bg-primary-color">
            <ArrowRightCircleIcon className="w-[34px] h-[34px]" />
          </Button>
        </div>
      </div>
    );
  };
  