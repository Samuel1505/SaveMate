import {
    BatteryChargingIcon,
    CloudCogIcon,
    CloudyIcon,
    SignalHighIcon,
    WifiHighIcon,
  } from "lucide-react";
  import React from "react";
  
  export const Splashscreen = () => {
    const statusIcons = [
      { icon: <SignalHighIcon className="h-2.5 w-[15px]" />, position: "left-0" },
      { icon: <WifiHighIcon className="h-2.5 w-3.5" />, position: "left-[23px]" },
      {
        icon: <BatteryChargingIcon className="h-2.5 w-[22px]" />,
        position: "left-[45px]",
      },
    ];
  
    const cloudElements = [
      { Icon: CloudCogIcon, className: "top-[205px] left-[237px]" },
      { Icon: CloudCogIcon, className: "top-8 left-0" },
      { Icon: CloudyIcon, className: "top-[134px] left-[88px]" },
      { Icon: CloudyIcon, className: "top-[83px] left-[326px]" },
    ];
  
    return (
      <div className="flex flex-col items-center w-full h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="w-[390px] h-[844px] relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-0">
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
              {cloudElements.map(({ Icon, className }, index) => (
                <div key={index} className={`absolute ${className}`}>
                  <Icon className="w-20 h-20 text-white/50" />
                </div>
              ))}
  
              <div className="absolute w-[217px] h-[169px] top-[341px] left-[87px]">
                <img
                  className="absolute w-[202px] h-[90px] top-0 left-[15px]"
                  alt="SaveMate Logo"
                  src="https://c.animaapp.com/2ZkNyuVN/img/group-171.png"
                />
                <img
                  className="absolute w-[212px] h-[35px] top-[122px] left-px"
                  alt="SaveMate Text"
                  src="https://c.animaapp.com/2ZkNyuVN/img/savemate.png"
                />
              </div>
            </div>
  
            <div className="fixed w-[390px] h-[34px] top-0 left-0 flex justify-between items-center px-5 bg-white/80 backdrop-blur-sm shadow-sm">
              <img
                className="w-[49px] h-[19px]"
                alt="Time"
                src="https://c.animaapp.com/2ZkNyuVN/img/left-side@2x.png"
              />
  
              <div className="w-40 h-[34px] bg-[url(https://c.animaapp.com/2ZkNyuVN/img/notch.svg)] bg-[100%_100%]" />
  
              <div className="w-[67px] h-2.5 flex justify-between items-center relative">
                {statusIcons.map(({ icon, position }, index) => (
                  <div key={index} className={`absolute ${position}`}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Splashscreen;