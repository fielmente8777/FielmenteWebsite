import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeadingDesc } from "@/components/typography";
import type { Metadata } from "next";
import { contactPageData } from "./contactPageData";
import ContactUsSection from "./components/ContactUsSection";

export const metadata: Metadata = {
  title: "Contact Fielmente - Fielmente",
  description:
    "Contact usWe're here just for you.We are always ready to lend an ear, offer advice and get your project over the line.We are always ready to lend an ear, offer advice and get your project over the line. Connect with UsHow can we help you right now?In order to make sure your website is user friendly and optimized for Google’s algorithm, our on-site optimization experts clean up the code and copy. What is digital marketing? Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth. What is SEO? SEO (Search Engine Optimization) is the practice of optimizing website content, structure, and various other factors to improve its visibility in search engine results. This helps increase organic traffic(non-paid traffic) and enhances a website’s chances of being found by users searching for relevant information or products. How does SEO affect your sales? SEO can positively impact sales by:SEO drives sales by boosting visibility through higher rankings,SEO helps attracts potential customers actively seeking products/services.It helps in Higher Ranking. Top ranks establish credibilitySEO also helps faster loading and mobile-friendliness improve user experience, raising engagement.A successful strategy ensures lasting traffic and sales growth, yielding sustained benefits. What do you need to start your marketing? To begin marketing effectively,You need to have a clear understanding of your target audience,You need defined goals,You should also have a well-designed marketing strategy,The major thing you should need is compelling content and suitable channels (like social media, website),You must have knowledge about Analytics tools to track performance.You should adapt and refine your approach based on data and audience response. How does SEO work? SEO works byOptimizing website elements (keywords, content, meta tags) to match user search intent.Search engines crawl and index these optimized pages, After that, it ranks them based on relevance and authority.Higher rankings lead to increased visibility and organic traffic. How to start SEO Campaign? Identify relevant keywords your audience searches for.Optimize your On-Page (webpage content, titles, and meta descriptions) with chosen keywords.Ensure site structure, speed, and mobile-friendliness, that is to optimize your Technical Sites.Create valuable, engaging, and shareable content.Secure high-quality backlinks from reputable websites.Make the best Analytics setup. Install tools to track performance and make data-driven adjustments. Fielmente",
    alternates: {
    canonical: "https://fielmente.com/contact/",
    languages: {
      "en-US": "https://fielmente.com/en/contact/",
    },
  },
  openGraph: {
    title: "Contact Fielmente - Fielmente",
    description:
      "Contact us We're here just for you.We are always ready to lend an ear, offer advice and get your project over the line.We are always ready to lend an ear, offer advice and get your project over the line. Connect with UsHow can we help you right now?In order to make sure your website is user friendly and optimized for Google’s algorithm, our on-site optimization experts clean up the code and copy. What is digital marketing? Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth. What is SEO? SEO (Search Engine Optimization) is the practice of optimizing website content, structure, and various other factors to improve its visibility in search engine results. This helps increase organic traffic(non-paid traffic) and enhances a website’s chances of being found by users searching for relevant information or products. How does SEO affect your sales? SEO can positively impact sales by:SEO drives sales by boosting visibility through higher rankings,SEO helps attracts potential customers actively seeking products/services.It helps in Higher Ranking. Top ranks establish credibilitySEO also helps faster loading and mobile-friendliness improve user experience, raising engagement.A successful strategy ensures lasting traffic and sales growth, yielding sustained benefits. What do you need to start your marketing? To begin marketing effectively,You need to have a clear understanding of your target audience,You need defined goals,You should also have a well-designed marketing strategy,The major thing you should need is compelling content and suitable channels (like social media, website),You must have knowledge about Analytics tools to track performance.You should adapt and refine your approach based on data and audience response. How does SEO work? SEO works byOptimizing website elements (keywords, content, meta tags) to match user search intent.Search engines crawl and index these optimized pages, After that, it ranks them based on relevance and authority.Higher rankings lead to increased visibility and organic traffic. How to start SEO Campaign? Identify relevant keywords your audience searches for.Optimize your On-Page (webpage content, titles, and meta descriptions) with chosen keywords.Ensure site structure, speed, and mobile-friendliness, that is to optimize your Technical Sites.Create valuable, engaging, and shareable content.Secure high-quality backlinks from reputable websites.Make the best Analytics setup. Install tools to track performance and make data-driven adjustments. Fielmente",
      
  },
};

function page() {
  return (
    <>
      <SectionWithContainer>
        <SectionHeadingDesc
          title={contactPageData.bannerData.title}
          subTitle={contactPageData.bannerData.subTitle}
          description={contactPageData.bannerData.description}
          textcenter
          wrapperClassName="!gap-0"
          tagLevel={1}
        />
      </SectionWithContainer>
      <ContactUsSection {...contactPageData.formData} />
    </>
  );
}

export default page;
