import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Footer from "@/components/Footer/Footer";
import Header2 from "@/components/Header/header2";
import Call from "@/components/Call";
import Whatsapp from "@/components/WhatsApp";
import NavBar from "@/components/Header/NavBar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fielmente - India's Leading Hospitality Marketing Agency",
  description:
    "We're the best hospitality marketing agency in India serving hotels, resorts restaurants, and cloud kitchens for more than 10 years.",
  keywords:
    "Fielmente, Hotel Marketing Agency, Cloud Kitchen Marketing Agency, Resort Marketing Agency",
  alternates: {
    canonical: "https://fielmente.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Fielmente", url: "https://fielmente.com/" }],
  openGraph: {
    title: "Fielmente - India's Leading Hospitality Marketing Agency",
    description:
      "We're the best hospitality marketing agency in India serving hotels, resorts restaurants, and cloud kitchens for more than 10 years.",
    url: "https://fielmente.com/",
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://fielmente.com/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vKQyk75wG0kfB4x60GCRAmVeErtPS9rgcM9-YNRAvLw"
        />

        {/* <!-- Clarity tracking code for Fielmente new 06 09 2024--> */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/" + i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "o0h0ldtiip");`,
          }}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PVZG7NGGMG');`,
          }}
        ></Script>

        {/* <Script
          id="google-conversion-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {'send_to': 'AW-10860806708/6GvFCPKGytgZELSE67oo'});`,
          }}
        /> */}

        {/* LeadBooster Configuration Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pipedriveLeadboosterConfig = {
                base: 'leadbooster-chat.pipedrive.com',
                companyId: 13896258,
                playbookUuid: 'b2bcf4e2-ea94-4382-857f-5ccde99a8618',
                version: 2
              };
              (function () {
                var w = window;
                if (w.LeadBooster) {
                  console.warn('LeadBooster already exists');
                } else {
                  w.LeadBooster = {
                    q: [],
                    on: function (n, h) {
                      this.q.push({ t: 'o', n: n, h: h });
                    },
                    trigger: function (n) {
                      this.q.push({ t: 't', n: n });
                    },
                  };
                }
              })();
            `,
          }}
        />
        {/* LeadBooster Loader Script */}
        {/* <script
          src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
          async
        ></script> */}
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

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQ5LPRNM');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce(‘https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js’); })(document,‘script’); })(‘bElvO73o52V7ZMqj’);
            `,
          }}
        />
      </head>
      <body className={inter.className} cz-shortcut-listen="true">
        <noscript></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* <Header /> */}
        <NavBar />
        {children}
        <Footer />
        <Call />
        <Whatsapp />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQ5LPRNM"></iframe>
        </noscript>
        {/* <script
          src="//code.tidio.co/vqp6nexgcvuyk9zdnqsekfjwt1mlfw1x.js"
          async
        ></script> */}
      </body>
    </html>
  );
}
