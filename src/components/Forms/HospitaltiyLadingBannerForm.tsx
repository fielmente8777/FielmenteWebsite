"use client";

import { usePathname } from "next/navigation";
import HospitalityLandingBannerFormOld from "./HospitalityLandingBannerFormOld";
import HospitalityLandingBannerFormNew from "./HospitalityLandingBannerFormNew";

const HospitalityLandingBannerForm = () => {
  const pathName = usePathname();
  const paths = [
    "/landing-page/",
    "/resort/",
    "/hospitality/",
    "/dubai-restaurant/",
    "/restaurant/",
    "/UK/",
    "/USA/",
  ];
  const shouldRender = paths.includes(pathName);
  return !shouldRender ? <HospitalityLandingBannerFormNew /> : <HospitalityLandingBannerFormOld />;
  // return <HospitalityLandingBannerFormNew />;
};

export default HospitalityLandingBannerForm;
