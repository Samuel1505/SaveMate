import {
    ArrowRightCircleIcon,
    BatteryChargingIcon,
    SignalHighIcon,
    WifiHighIcon,
  } from "lucide-react";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  
  const statusBarItems = [
    { icon: SignalHighIcon, className: "w-[15px] h-2.5" },
    { icon: WifiHighIcon, className: "w-3.5 h-2.5" },
    { icon: BatteryChargingIcon, className: "w-[22px] h-2.5" },
  ];
  
  const progressDots = [
    { active: true, className: "w-[50px]" },
    { active: false, className: "w-2.5" },
    { active: false, className: "w-2.5" },
  ];
  
  export const Onboarding = () => {
    return (
      <div className="bg-white flex flex-row justify-center w-full">
        <Card className="bg-white overflow-hidden w-[390px] h-[844px] relative border-none">
          {/* Status Bar */}
          <div className="fixed w-[390px] h-[34px] top-0 left-0">
            <img
              className="absolute w-[49px] h-[19px] top-[7px] left-[25px]"
              alt="Time"
              src="https://c.animaapp.com/YxYXZX9F/img/left-side@2x.png"
            />
            <div className="absolute w-40 h-[34px] top-0 left-[115px] bg-[url(https://c.animaapp.com/YxYXZX9F/img/notch.svg)] bg-[100%_100%]" />
            <div className="absolute w-[67px] h-2.5 top-3 left-[298px] flex gap-2">
              {statusBarItems.map((Item, index) => (
                <Item.icon key={index} className={Item.className} />
              ))}
            </div>
          </div>
  
          {/* Skip Button */}
          <Button
            variant="link"
            className="absolute top-[65px] right-[20px] font-bold text-primary-color"
          >
            Skip
          </Button>
  
          {/* Main Content */}
          <CardContent className="pt-[194px] flex flex-col items-center">
            <img
              className="w-[205px] h-44 mb-[73px]"
              alt="Cooperative illustration"
              src="https://c.animaapp.com/YxYXZX9F/img/illustr.png"
            />
  
            <div className="w-[349px] text-center">
              <h1 className="text-lg font-bold mb-4">
                <span className="text-tertiary-color">
                  The No #1 cooperative society gone{" "}
                </span>
                <span className="text-primary-color">Digital</span>
                <span className="text-tertiary-color">.</span>
              </h1>
  
              <p className="text-sm text-tertiary-color">
                We are committed to improving individual savings and investment
                habits.
              </p>
            </div>
  
            {/* Progress Dots */}
            <div className="flex gap-2 mt-[60px] mb-[39px]">
              {progressDots.map((dot, index) => (
                <div
                  key={index}
                  className={`h-2.5 rounded-xl ${
                    dot.active ? "bg-primary-color" : "bg-accent"
                  } ${dot.className}`}
                />
              ))}
            </div>
  
            {/* Next Button */}
            <Button className="w-[164px] h-[52px] bg-primary-color hover:bg-primary-color/90">
              <ArrowRightCircleIcon className="w-[34px] h-[34px]" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };
  