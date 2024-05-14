import React from "react";
import OnlinePresence from "../../components/online-presence";
import UnloackBenifts from "../../components/unloack-benifts";
import CaptivateAndConnect from "../../components/captivate-and-connect";
import Mobiles from "../../components/mobiles";
import WantToJoin from "../../components/want-to-join";
import Frequently from "../../components/frequently";

function page() {
  return (
    <div>
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <OnlinePresence title={"HOTEL SOCIAL MEDIA MARKETING"} />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient-second">
        <div className="max-width">
          <UnloackBenifts />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <CaptivateAndConnect />
        </div>
      </div>

      <div>
        <div className="max-width">
          <Mobiles />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-black">
        <div className="max-width">
          <WantToJoin />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <Frequently />
        </div>
      </div>
    </div>
  );
}

export default page;
