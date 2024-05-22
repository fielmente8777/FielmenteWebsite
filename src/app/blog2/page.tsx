import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/logo.webp";
import { Accordin } from "../industries-we-serve/components/common-hero";
const BlogDetails = {
  breadCrumbTitle: " Why do you need Fielmente Hospitality Marketing Agency?",
  header: `In recent times, opinions and reviews have become crucial for most businesses of all sizes. Consumers read reviews to decide if that particular business or store is worth their time and money. Most of us rely on the reviews; hence, they are pivotal for your business and to respond and reply to them is very crucial. Google reviews are necessary for any local business, as 73% of users search for online reviews, and consumers are twice as likely to search for new local businesses on Google. Replying to customers or customer feedback can be tricky, but it doesn’t have to be. This blog is to help you avoid common mistakes that could fuel negative word-of-mouth and make it difficult to attract new customers. Let us see how creatively you can reply to google reviews and facebook feedback.`,

  tableOfContent: [
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
    "Why Are Reviews Important?",
  ],

  reviewImportant: {
    title: "Why Are Reviews Important?",
    subtitle:
      "It is a legitimate question because the most formidable weapon against errors of every kind is reason! Reviews for any business are crucial for three main reasons, and let’s look at each one of them now.",
    list: [
      "  The first is to get new customers. Every business needs new customers for growth and revenue. ",

      "Imagine a scenario where a customer is looking for a cake shop to buy a cake, and he comes across two shops.",
    ],
  },

  replyToGoogle: {
    title: "Why do we need to reply to Google reviews?",
    subtitle: [
      " Google ranks those businesses that are reliable and trustworthy. As Google wants to provide the best result to a search query, it looks for quality also. ",

      "When we respond to Google reviews, we help Google see us as a trustworthy place of business, boosting our credibility online and offline.",

      "It also greatly affects local SEO. So, if you have Google reviews, then make sure you reply to them.",
    ],
  },

  positiveGoogleReviews: {
    title: "How to Respond to Positive Google Reviews?",
    subtitle:
      "Positive reviews make you happy and keep you motivated. Customers love your business, and they tell their friends about it. So, you must acknowledge your delighted customers by replying to their positive feedback. The following ways will help you create that bond between your ‘happy’ customer and you.",
    content: [
      {
        title: "1. Personalise the review:",
        subtitle:
          "When replying, personalise it using the person’s name, mention the product, and emphasise thanking them.",
      },
      {
        title: "1. Personalise the review:",
        subtitle:
          "When replying, personalise it using the person’s name, mention the product, and emphasise thanking them.",
      },
      {
        title: "1. Personalise the review:",
        subtitle:
          "When replying, personalise it using the person’s name, mention the product, and emphasise thanking them.",
      },
      {
        title: "1. Personalise the review:",
        subtitle:
          "When replying, personalise it using the person’s name, mention the product, and emphasise thanking them.",
      },
      {
        title: "1. Personalise the review:",
        subtitle:
          "When replying, personalise it using the person’s name, mention the product, and emphasise thanking them.",
      },
    ],
  },

  stratigies: {
    title:
      "Best Tips or Strategies You Should Follow While Replying to Positive Reviews",
    subtitle: "Use these tips or strategies to reply to positive reviews:",
    list: [
      "  If the customer has taken an employee’s or product’s name, then ensure to mention that name in your response. ",
      "Add local business keywords to your response. These keywords could be your business name, location, products, and services.",
      "Mention the customer’s name without fail. It would make the customer feel valued and add a personal touch to your response.",
      "It would be best to mention other products and services relevant to the customer.",
    ],
  },

  positiveReviews: {
    title: "Best Examples for Positive Review Response",
    subtitle:
      "You can use the following as a guide or as a template for replying to positive reviews:",
    list: [
      {
        title: "Example 1",
        subtitle: `A customer praises you and says they had a great experience. They even mention the product or the service. They also praise the entire experience during their purchase. How do you respond?
  
            Your response should emphasise thanking them.`,
        heading: `It can go like this – `,
        subheading: `Thank you so much (customer’s name) for sharing your review. We are glad you liked (product name or service name). We take pride in serving our valued customers with (quality products/ quality service). Thank you for choosing us. We would be honoured to bring you such great experiences in future as well. 
  
            This response resonates with the customer as it uses their name and thanks them. It is personalised and is professional. It also prompts the customer to visit again. `,
        heading2: "Another way to reply to this positive review ",
        subheading2: `Dear (customer’s name), thank you for saying (repeat the appreciation here). It truly made our day. We are grateful to you. We hope to serve you with a delightful experience again. Thank you!
  
            This response shows how happy you were that the customer was happy and you are ready to do it again.`,
      },
      {
        title: "Example 1",
        subtitle: `A customer praises you and says they had a great experience. They even mention the product or the service. They also praise the entire experience during their purchase. How do you respond?
    
              Your response should emphasise thanking them.`,
        heading: `It can go like this – `,
        subheading: `Thank you so much (customer’s name) for sharing your review. We are glad you liked (product name or service name). We take pride in serving our valued customers with (quality products/ quality service). Thank you for choosing us. We would be honoured to bring you such great experiences in future as well. 
    
              This response resonates with the customer as it uses their name and thanks them. It is personalised and is professional. It also prompts the customer to visit again. `,
        heading2: "Another way to reply to this positive review ",
        subheading2: `Dear (customer’s name), thank you for saying (repeat the appreciation here). It truly made our day. We are grateful to you. We hope to serve you with a delightful experience again. Thank you!
    
              This response shows how happy you were that the customer was happy and you are ready to do it again.`,
      },
      {
        title: "Example 1",
        subtitle: `A customer praises you and says they had a great experience. They even mention the product or the service. They also praise the entire experience during their purchase. How do you respond?
    
              Your response should emphasise thanking them.`,
        heading: `It can go like this – `,
        subheading: `Thank you so much (customer’s name) for sharing your review. We are glad you liked (product name or service name). We take pride in serving our valued customers with (quality products/ quality service). Thank you for choosing us. We would be honoured to bring you such great experiences in future as well. 
    
              This response resonates with the customer as it uses their name and thanks them. It is personalised and is professional. It also prompts the customer to visit again. `,
        heading2: "Another way to reply to this positive review ",
        subheading2: `Dear (customer’s name), thank you for saying (repeat the appreciation here). It truly made our day. We are grateful to you. We hope to serve you with a delightful experience again. Thank you!
    
              This response shows how happy you were that the customer was happy and you are ready to do it again.`,
      },
    ],
  },
  negativeFeedBack: {
    title: "How to respond to negative Facebook Feedback with example",
    subtitle: [
      "   When you get negative feedback, it is important to think before replying, as this will impact your public image. These are a few of the points to consider.",

      "Apologise and thank customers for their feedback. Review and try to understand why the customer had a bad experience. ",

      "Once you finish reviewing, ask customers to share their contact details so that you can discuss the issue they faced and come up with a solution.",

      "Inform customers that their negative feedback will be checked, and necessary changes will be made to the product or services.",

      "A few of the examples of these comments are as follows:",
    ],
    list: [
      {
        title: "Example 1",
        sublist: [
          "  Hi (Reviewer name),",

          "We’re sorry to hear about your bad experience and appreciate you bringing this to our attention. We take customer feedback seriously and are committed to making things right.",

          "Can you please explain, in detail, what happened so we can take the necessary steps to improve our <Product name)? Don’t hesitate to contact our customer support team at (Business email or phone number). We would appreciate any additional feedback you could provide.",

          "Thank you for your patience and understanding! We hope to have the opportunity to turn your experience around.",
        ],
      },
      {
        title: "Example 2",
        sublist: [
          "Hello (NAME),",

          "We’re so sorry this happened. Let us make it up to you. We’ll be in touch today, or please call me on (phone) if it’s more convenient.",

          "Yours sincerely,",

          "(Name)",

          "(Company name and position)",

          "We at Fielmente help you ace your Google review game. We also are India’s leading hospitality digital marketing agency. would love to help you achieve your business goals. Contact us!",
        ],
      },
    ],
  },

  Conclusion: {
    title: "Conclusion",
    subtitle:
      "Reviews are increasingly gaining centre stage when creating opinions, whether a business or product. Reviews on Google Business Profile and Facebook Feedback are crucial for your business. Yes, it takes time to learn to respond courteously. Use this blog as a guide the next time you get feedback. You don’t have to either worry or avoid reviews. Remember to be polite and concise and empathise with your customers.",
  },

  faq: [
    {
      question: "How to promote your Hotel on Social Media?",
      body: {
        type: "null",
        list: [
          "To promote your hotel on social media, you can share high-quality photos, videos, and entertaining content.",
          "You can also conduct contests, offer unique deals, and interact with guests. Do not forget to use relevant hashtags and collaborate with influencers to grow your reach.",
        ],
      },
    },
    {
      question: "What Social Media do Hotels use?",
      body: {
        type: "null",
        list: [
          " Hotels commonly use Social Media platforms like Facebook, Instagram, and Twitter for visual storytelling and customer engagement.",
          "   Also, LinkedIn is used for B2B networking. While YouTube showcases videos of the property.",
        ],
      },
    },
    {
      question: "Why do hotels have social media?",
      body: {
        type: "null",
        header:
          "Hotels use social media to connect with guests. They also showcase their hotels and share experiences. It is a way to increase brand awareness. Also, drive bookings, and engage with customers on a personal level.",
      },
    },
    {
      question: "How social media benefits the hospitality industry?",
      body: {
        type: "list",
        header: "Social media is a benefit for the hospitality industry:",
        list: [
          "  Social Media helps in growing brand exposure, ",
          "It encourages direct guest interactions and",
          "It showcases a hotel’s unique offerings.",
        ],
        footer: `It helps in creating customer loyalty, sharing user-generated content, and staying updated on industry trends.`,
      },
    },
    {
      question: "What are the 3 main areas of SEO?",
      body: {
        type: "list",
        header: "The three main areas of SEO are:",
        list: [
          "On-page optimization (content, keywords, meta tags),",
          "Off-page optimization (backlinks, social signals), and ",
          "Technical optimization (site speed, mobile-friendliness, crawlability).",
        ],
      },
    },
    {
      question: "How do hotels use Social Media to attract customers?",
      body: {
        type: "list",
        header: "Hotels use social media to",
        list: [
          "Post enticing visuals,",
          "  Share guest testimonials, and ",
          "  Offer exclusive promotions. ",
        ],
      },
    },
  ],
};

function page() {
  return (
    <section>
      <div className="max-width md:py-20 py-10 flex gap-14">
        <div className="w-[80%]">
          <div className="flex justify-center gap-4 text-2xl text-black">
            <Link href={"/"}>Home »</Link>
            <Link href={"/"}>Blogs</Link>
            <p>{BlogDetails.breadCrumbTitle}</p>
          </div>

          <div className="mt-8 flex flex-col gap-8">
            <p className="text-black text-lg font-semibold">
              A hospitality digital marketing agency brings its clients revenue
              with its tailored hospitality marketing solutions. This helps the
              hotel to be more visible to its potential guests. According to
              revenue-hub.com, 97% of millennials share photos on social media
              while they travel! That number would only grow as more and more
              people are starting to use the internet.
            </p>
            <p className="text-black text-lg font-semibold">
              A hospitality consultant helps hotels with economic certainty and
              unexpected disruptions with a solid digital marketing strategy.
              But what if you are not sure if you need it?
            </p>
            <p className="text-black text-lg font-semibold">
              In this blog, “Why do you need Fielmente Hospitality Marketing
              Agency” we have discussed the benefits of our agency as your
              hospitality consultant in India.
            </p>
            <p className="text-black text-lg font-semibold">
              But before that, it is important to understand
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Why Does the Hospitality Industry Need Marketing
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                A hospitality digital marketing agency brings its clients
                revenue with its tailored hospitality marketing solutions. This
                helps the hotel to be more visible to its potential guests.
                According to revenue-hub.com, 97% of millennials share photos on
                social media while they travel! That number would only grow as
                more and more people are starting to use the internet.
              </p>
              <p className="text-black text-lg font-semibold">
                A hospitality consultant helps hotels with economic certainty
                and unexpected disruptions with a solid digital marketing
                strategy. But what if you are not sure if you need it?
              </p>
              <p className="text-black text-lg font-semibold">
                In this blog, “Why do you need Fielmente Hospitality Marketing
                Agency” we have discussed the benefits of our agency as your
                hospitality consultant in India.
              </p>
              <p className="text-black text-lg font-semibold">
                But before that, it is important to understand
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Fielmente – The best hospitality marketing agency serving hotels,
              restaurants, and cloud kitchens for more than 10 years
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                We have served in more than 5 countries with expertise in
                hotels, resorts, restaurants, and cloud kitchens. Also, helps
                you realize and reach your full potential with our in-house team
                of experts.
              </p>
              <p className="text-black text-lg font-semibold">
                We understand your passion and business ideologies with
                consulting. Convey your purpose with unique storytelling. We
                design the website and all marketing content with stunning
                visuals that grab your audience’s attention.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-5xl text-black font-bold">
              Why do you need Fielmente Hospitality Marketing Agency?
            </h2>
            <p className="text-black text-lg mt-6">
              At Fielmente we take your business seriously and invest time and
              resources in your business through our advisors. Business advisors
              can save you time and stress so you can focus on running your
              business.
            </p>
            <p className="text-black text-lg mt-6">
              At Fielmente we take your business seriously and invest time and
              resources in your business through our advisors. Business advisors
              can save you time and stress so you can focus on running your
              business.
            </p>
            <p className="text-black text-lg mt-6">
              At Fielmente we take your business seriously and invest time and
              resources in your business through our advisors. Business advisors
              can save you time and stress so you can focus on running your
              business.
            </p>

            <ul
              className="mt-10 flex flex-col gap-2 text-lg !list-disc 
            
            list-inside text-black"
            >
              <li className="flex flex-col gap-1">
                We are cost-effective to reach your target customer using
                various digital channels.
              </li>
              <li className="flex flex-col gap-1">
                We are cost-effective to reach your target customer using
                various digital channels.
              </li>
              <li className="flex flex-col gap-1">
                We are cost-effective to reach your target customer using
                various digital channels.
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="text-5xl text-black font-bold">
              A Brief History of the Company
            </h2>
            <p className="text-black text-lg mt-6">
              Fielmente was co-founded by Sachin Kapoor and Pawan Agrawal, who
              are deeply passionate about hospitality and marketing. They have
              years of experience in the hotel and hospitality industry. We are
              a strong team of 15+ marketing experts and hospitality consultants
              in Indi
            </p>
            <p className="text-black text-lg mt-6">
              In our journey so far, we have completed 120 projects with a 95%
              satisfaction rate. Our team has the opportunity to work with
              notable names like Marriot, Hyatt, Golden Tulip, and Radisson Blu
              for their hospitality services.
            </p>
            <p className="text-black text-lg mt-6">
              In the past, we have relished the media coverage by Medium, Bharat
              Saga, and The India Hunt.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="text-5xl text-black font-bold">
              Why it’s Important to have Advisors
            </h2>
            <p className="text-black text-lg mt-6">
              As hospitality consultants in India with 10 years under our belt,
              we have seen firsthand the benefits of hospitality marketing
              solutions to hospitality businesses of all sizes.
            </p>
            <p className="text-black text-lg mt-6">
              As hospitality consultants in India with 10 years under our belt,
              we have seen firsthand the benefits of hospitality marketing
              solutions to hospitality businesses of all sizes.
            </p>
            <p className="text-black text-lg mt-6">
              As hospitality consultants in India with 10 years under our belt,
              we have seen firsthand the benefits of hospitality marketing
              solutions to hospitality businesses of all sizes.
            </p>
            <p className="text-black text-lg mt-6">
              As hospitality consultants in India with 10 years under our belt,
              we have seen firsthand the benefits of hospitality marketing
              solutions to hospitality businesses of all sizes.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="text-5xl text-black font-bold">
              Industries we serve
            </h2>

            <p className="font-bold text-black text-2xl mt-4">We serve </p>

            <ul className="mt-10 flex flex-col gap-2 text-lg text-black">
              <li className="flex flex-col gap-1">Hotels and Resorts</li>
              <li className="flex flex-col gap-1">Hotels and Resorts</li>
              <li className="flex flex-col gap-1">Hotels and Resorts</li>
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="text-5xl text-black font-bold">
              Services we Provide
            </h2>

            <p className="font-bold text-black text-2xl mt-4">
              Now that we know a lot about why business advisors are vital and
              the immense values it provides. Here are fields in which Fielmente
              Hospitality excels, and so can your hotels:{" "}
            </p>

            <ul className="mt-10 flex flex-col gap-10 text-lg text-black">
              <li className="flex flex-col gap-1 font-bold text-xl">
                Web Design and Development
                <p className="font-normal text-lg">
                  We create cutting-edge websites that redefine the online
                  experience for guests. Our websites are visually appealing,
                  easy to navigate, and optimised for conversion.
                </p>
              </li>
              <li className="flex flex-col gap-1 font-bold text-xl">
                Web Design and Development
                <p className="font-normal text-lg">
                  We create cutting-edge websites that redefine the online
                  experience for guests. Our websites are visually appealing,
                  easy to navigate, and optimised for conversion.
                </p>
              </li>
              <li className="flex flex-col gap-1 font-bold text-xl">
                Web Design and Development
                <p className="font-normal text-lg">
                  We create cutting-edge websites that redefine the online
                  experience for guests. Our websites are visually appealing,
                  easy to navigate, and optimised for conversion.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="text-5xl text-black font-bold">
              Fielmente’s Hospitality Marketing Solutions: Success Stories
            </h2>

            <p className="font-bold text-black text-2xl mt-4">
              Since 2020, Fielmente has delivered flawlessly creative
              hospitality marketing solutions to over 20 exemplary brands. We
              believe transformation happens from partnership, so we work
              closely with our clients to understand their goals and empower
              them toward success.
            </p>
            <p className="font-bold text-black text-2xl mt-4">
              Here are a few of our happy clients:
            </p>
            <p className="font-bold text-black text-2xl mt-4">
              Azoos, Bewafa Biryani, Doner & Gyros, Ghar se Khana, and La Pino’s
              Pizza.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="text-5xl text-black font-bold">
              Why should you choose us?
            </h2>

            <p className="font-bold text-black text-2xl mt-4">
              Here are just a few ways Fielmente can help you
            </p>

            <ul className="mt-10 flex flex-col gap-10 text-lg text-black">
              <li className="flex flex-col gap-1 font-bold text-xl">
                Increase brand awareness
                <p className="font-normal text-lg">
                  Fielmente will help you to develop a strong brand identity and
                  to communicate your brand message to your target audience. We
                  will also help you to build relationships with potential
                  customers through social media, email marketing, and other
                  channels.
                </p>
              </li>
              <li className="flex flex-col gap-1 font-bold text-xl">
                Web Design and Development
                <p className="font-normal text-lg">
                  We create cutting-edge websites that redefine the online
                  experience for guests. Our websites are visually appealing,
                  easy to navigate, and optimised for conversion.
                </p>
              </li>
              <li className="flex flex-col gap-1 font-bold text-xl">
                Web Design and Development
                <p className="font-normal text-lg">
                  We create cutting-edge websites that redefine the online
                  experience for guests. Our websites are visually appealing,
                  easy to navigate, and optimised for conversion.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">Conclusion</h2>
            <p className="text-black text-lg">
              Imagine a hotel business that is thriving with a steady stream of
              new customers and a loyal following of repeat guests. Imagine a
              business that is profitable and growing, with a clear vision for
              the future.
            </p>
            <p className="text-black text-lg">
              Imagine a hotel business that is thriving with a steady stream of
              new customers and a loyal following of repeat guests. Imagine a
              business that is profitable and growing, with a clear vision for
              the future.
            </p>
            <p className="text-black text-lg">
              Imagine a hotel business that is thriving with a steady stream of
              new customers and a loyal following of repeat guests. Imagine a
              business that is profitable and growing, with a clear vision for
              the future.
            </p>
            <p className="text-black text-lg">
              Imagine a hotel business that is thriving with a steady stream of
              new customers and a loyal following of repeat guests. Imagine a
              business that is profitable and growing, with a clear vision for
              the future.
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-black text-center">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              <Accordin Data={BlogDetails.faq} />
            </div>
          </div>
        </div>

        <div className="w-[20%]">
          <h2 className="text-center text-black text-3xl font-bold underline">
            Recent Blogs
          </h2>

          <div className="mt-10 flex flex-col gap-20">
            <div className="flex flex-col">
              <Link href={"/"} className="text-black text-lg font-bold">
                How to Reply to Google Business Profile and Facebook Feedback
              </Link>
              <span className="text-black">October 12, 2023</span>
              <p className="text-lg text-black mt-4">
                In recent times, opinions and reviews have become crucial for
              </p>
            </div>
            <div className="flex flex-col">
              <Link href={"/"} className="text-black text-lg font-bold">
                How to Reply to Google Business Profile and Facebook Feedback
              </Link>
              <span className="text-black">October 12, 2023</span>
              <p className="text-lg text-black mt-4">
                In recent times, opinions and reviews have become crucial for
              </p>
            </div>
            <div className="flex flex-col">
              <Link href={"/"} className="text-black text-lg font-bold">
                How to Reply to Google Business Profile and Facebook Feedback
              </Link>
              <span className="text-black">October 12, 2023</span>
              <p className="text-lg text-black mt-4">
                In recent times, opinions and reviews have become crucial for
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="relative w-full aspect-[4/1.5]">
              <Image
                src={Logo}
                alt="fielmente-log"
                fill
                className="object-contain"
              />
            </div>
            <form action="" className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 text-lg text-black w-full rounded-md outline-none border"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 text-lg text-black w-full rounded-md outline-none border"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 text-lg text-black w-full rounded-md outline-none border"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 text-lg text-black w-full rounded-md outline-none border"
                />
              </div>

              <div>
                <button className="w-full bg-[#6664E4] text-lg py-4 rounded-md font-bold">
                  Get A Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
