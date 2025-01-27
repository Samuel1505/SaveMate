import {
    BatteryChargingIcon,
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
  
  export default function Login() {
    return (
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[390px] h-[844px] relative">
          {/* Status Bar */}
          <div className="fixed w-[390px] h-[34px] top-0 left-0 flex justify-between items-center px-6 py-2">
            <img src="" alt="Time" className="w-[49px] h-[19px]" />
            <div className="w-40 h-[34px] bg-[url(/notch.svg)] bg-[100%_100%]" />
            <div className="flex gap-2 items-center">
              {statusBarItems.map((Item, index) => (
                <Item.icon key={index} className={`text-black ${Item.className}`} />
              ))}
            </div>
          </div>
  
          <div className="flex flex-col items-center pt-[228px] px-5">
            <h1 className="font-medium text-tertiary-color text-lg text-center mb-5">
              WELCOME BACK
            </h1>
            <p className="text-tertiary-color text-base mb-12">
              Sign in to continue to cloud Cooperative
            </p>
  
            <Card className="w-full border-0">
              <CardContent className="p-0 space-y-4">
                <Input
                  placeholder="Username"
                  className="h-[52px] border-accent"
                />
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-[52px] border-accent"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-tertiary-color text-[13px]"
                  >
                    Remember me
                  </label>
                </div>
                <Button className="w-full h-[52px] bg-primary-color hover:bg-primary-color/90">
                  Log in
                </Button>
              </CardContent>
            </Card>
  
            <div className="mt-8 text-center">
              <p className="text-[#372e52] text-base">
                Have no account?{" "}
                <span className="text-primary-color cursor-pointer">
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  