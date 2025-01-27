import {
    BatteryChargingIcon,
    SignalHighIcon,
    WifiHighIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  
  const slides = [
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: false,
    },
    {
      id: 3,
      active: true,
    },
  ];
  
  export const Onboarding = () => {
    return (
      <div className="bg-white flex flex-row justify-center w-full">
        <Card className="w-[390px] h-[844px] relative border-none">
          <CardContent className="p-0">
            {/* Status Bar */}
            <div className="w-[390px] h-[34px] flex items-center justify-between px-6 py-2">
              <img
                src="https://c.animaapp.com/bPKvgkk3/img/left-side@2x.png"
                alt="Time"
                className="w-[49px] h-[19px]"
              />
              <div className="flex gap-2 items-center">
                <SignalHighIcon className="w-4 h-4" />
                <WifiHighIcon className="w-4 h-4" />
                <BatteryChargingIcon className="w-4 h-4" />
              </div>
            </div>
  
            {/* Skip Button */}
            <Button
              variant="link"
              className="absolute top-[65px] right-[24px] font-bold text-primary-color"
            >
              Skip
            </Button>
  
            {/* Main Content */}
            <div className="flex flex-col items-center px-6">
              <img
                src="https://c.animaapp.com/bPKvgkk3/img/savings-rafiki.png"
                alt="Savings illustration"
                className="w-[236px] h-44 mt-[194px] mb-[51px]"
              />
  
              <div className="text-center space-y-4">
                <h2 className="font-bold text-lg text-tertiary-color">
                  Start saving for a better tomorrow
                </h2>
                <p className="text-sm text-tertiary-color">
                  Use Cloud Cooperative to plan towards your dream home, kid's
                  education and travel the world.
                </p>
              </div>
  
              {/* Progress Dots */}
              <div className="flex gap-2 mt-14 mb-20">
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    className={`h-2.5 rounded-xl ${
                      slide.active
                        ? "w-[50px] bg-primary-color"
                        : "w-2.5 bg-accent"
                    }`}
                  />
                ))}
              </div>
  
              {/* Get Started Button */}
              <Button className="w-[290px] h-[52px] bg-[#0da62f] hover:bg-[#0da62f]/90 text-white font-bold">
                Get started
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  