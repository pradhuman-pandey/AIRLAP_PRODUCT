import { useEffect, useState } from "react";

export default function HomeSlider() {
  let ImageList = [
    "https://www.titan.co.in/wps/wcm/connect/titanrt/e9cc15b4-5426-46d8-98e7-e73cb542b8ce/desktop/TD_Smartsale_160823.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-e9cc15b4-5426-46d8-98e7-e73cb542b8ce-desktop-oDZpocF",
    "https://www.boat-lifestyle.com/cdn/shop/files/Wave_Style_Call_WEB_1_1400x.jpg?v=1695129521",
    "https://images.samsung.com/is/image/samsung/assets/in/computers/galaxy-book3/14951_GB3-PDP-banner_1440x450.jpg",
    "https://images.samsung.com/is/image/samsung/assets/in/computers/galaxy-book3/kv_trade_in_enhanced_PC.png",
  ];
  const [state, setState] = useState(4);

  useEffect(() => {
    let id = setInterval(() => {
      setState((state) => (state + 1) % 4);
    }, 2000);
    return () => clearInterval(id);
  }, [state]);

  return (
    <div>
      <div className="flex bg-white h-76 lg:h-400">
        <div className=" lg:block lg:w-full shadow-md">
          <div className="object-cover bg-cover bg-no-repeat bg-center">
            <img src={ImageList[state]} alt={"Item image"} width="100%" height="50%"/>
          </div>
        </div>
      </div>
    </div>
  );
}
