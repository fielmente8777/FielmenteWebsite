"use client";

import { usePathname } from "next/navigation";
import HospitalityLandingBannerFormNew from "./HospitalityLandingBannerFormNew";
import HospitalityLandingBannerFormOld from "./HospitalityLandingBannerFormOld";

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
}

export default HospitalityLandingBannerForm;