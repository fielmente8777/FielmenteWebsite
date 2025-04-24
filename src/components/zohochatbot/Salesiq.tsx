"use client";
import Script from "next/script";
const Salesiq = () => {
  return (
    <>
      {/* {pathname !== "/landing-page/" &&
        pathname !== "/resort/" &&
        pathname !== "/hospitality/" && ( */}
      <>
        <Script id="zoho-init" strategy="afterInteractive">
          {`
          window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}
          `}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq1a53c0a073d244118c9a52feae425ec200f5a91c3949296330c5edf2c3a6e668"
          strategy="afterInteractive"
          defer
        />
      </>
      {/* )} */}
    </>
  );
};

export default Salesiq;
