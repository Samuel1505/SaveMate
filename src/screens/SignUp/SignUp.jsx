import {
    BatteryChargingIcon,
    EyeOffIcon,
    SignalHighIcon,
    WifiHighIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  import { Checkbox } from "../../components/ui/checkbox";
  import { Input } from "../../components/ui/input";
  
  const statusBarItems = [
    { icon: SignalHighIcon, className: "w-[15px] h-2.5" },
    { icon: WifiHighIcon, className: "w-3.5 h-2.5" },
    { icon: BatteryChargingIcon, className: "w-[22px] h-2.5" },
  ];
  
  export const SignUp = () => {
    return (
      <main className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[390px] h-[844px] relative">
          {/* Status Bar */}
          <header className="fixed w-[390px] h-[34px] top-0 left-0 flex justify-between items-center px-6">
            <img
              src="https://c.animaapp.com/4v0bZJDd/img/left-side@2x.png"
              alt="Time"
              className="w-[49px] h-[19px]"
            />
            <div className="w-40 h-[34px] bg-[url(https://c.animaapp.com/4v0bZJDd/img/notch.svg)] bg-[100%_100%]" />
            <div className="flex gap-2 items-center">
              {statusBarItems.map((Item, index) => (
                <Item.icon key={index} className={Item.className} />
              ))}
            </div>
          </header>
  
          <Card className="mt-[228px] border-none shadow-none">
            <CardContent className="space-y-6 px-5">
              <div className="text-center space-y-4">
                <h1 className="font-bold text-lg text-tertiary-color">
                  CREATE AN ACCOUNT
                </h1>
                <p className="font-normal text-base text-tertiary-color">
                  Welcome to the future of Savings
                </p>
              </div>
  
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email Address*"
                  className="h-[52px] border-accent"
                />
                <Input
                  type="text"
                  placeholder="Username*"
                  className="h-[52px] border-accent"
                />
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Password*"
                    className="h-[52px] border-accent"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                  >
                    <EyeOffIcon className="h-6 w-6" />
                  </Button>
                </div>
              </div>
  
              <div className="flex items-center gap-2">
                <Checkbox id="terms" className="border-accent" />
                <label
                  htmlFor="terms"
                  className="text-sm text-tertiary-color cursor-pointer"
                >
                  I agree with the{" "}
                  <span className="text-primary-color">Terms and Conditions</span>
                </label>
              </div>
  
              <Button className="w-full h-[52px] bg-primary-color hover:bg-primary-color/90">
                Register
              </Button>
  
              <p className="text-center text-base">
                <span className="text-tertiary-color">Have an account? </span>
                <span className="text-primary-color cursor-pointer">Log in</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  };
  