import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/logo.webp";
const RecentBlogs = () => {
  return (
    <div className="">
      <aside className="w-full lg:py-[4.5rem] py-4 lg:px-8">
        {/* <div className="py-3"></div> */}
        <h2 className="text-3xl  font-bold capitalize text-black underline text-center lg:mb-8">Recent Blogs</h2>

        {blogsData.map((item, i) => (
          <div className="py-5 flex flex-col gap-2" key={i}>
            <div>
              <Link
                href={`/${item.link}`}
                className="text-2xl font-semibold text-black"
              >
                {item.title}
              </Link>
            </div>
            <small className="m-0 text-black text-sm font-bold">
              {item.month} {item.date}
            </small>
            <div>
              <p className="text-black text-lg text-justify font-normal">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* -------------------------------------************------------------------------------------ */}
        {/* -------------------------------------contact form------------------------------------------ */}
        {/* -------------------------------------************------------------------------------------ */}

        <div className="p-2">
          <Image
            src={Logo}
            loading="lazy"
            width={284.61}
            height={124.52}
            alt="log"
          />
        </div>

        <form className="p-1 flex flex-col items-center justify-center gap-4">
          <div className="w-full p-2 border border-black rounded-md bg-white">
            <input type="text" className="w-full text-black text-xl outline-none focus:outline-none" placeholder="Name" />
          </div>
          <div className="w-full p-2 border border-black rounded-md bg-white">
            <input type="email" className="w-full text-black text-xl outline-none focus:outline-none" placeholder="Email" />
          </div>
          <div className="w-full p-2 border border-black rounded-md bg-white">
            <input
              type="number"
              className="w-full text-black text-xl outline-none focus:outline-none"
              placeholder="Phone No"
            />
          </div>
          <div className="w-full p-2 border border-black rounded-md bg-white">
            <input
              type="text"
              className="w-full text-black text-xl outline-none focus:outline-none"
              placeholder="Business"
            />
          </div>
          <div className="w-full">
            <button
              type="button"
              className="w-full py-2 bg-[#6664E4] text-white rounded-2xl text-xl font-bold capitalize"
            >
              get a consultation
            </button>
          </div>
        </form>

        {/* -------------------------------------************------------------------------------------ */}
        {/* -------------------------------------contact form------------------------------------------ */}
        {/* -------------------------------------************------------------------------------------ */}
      </aside>
    </div>
  );
};

export default RecentBlogs;

const blogsData = [
  {
    title: "How to Reply to Google business Profile and Facebook Feedback",
    month: "October ",
    date: "12, 2023",
    desc: `In recent times, opinions and reviews have become crucial for`,
    link: "respond-to-facebook-google-reviews",
  },
  {
    title: "Why do you need Fielmente Hospitality Marketing Agency?",
    month: "October ",
    date: "11, 2023",
    desc: `A hospitality digital marketing agency brings its clients revenue with`,
    link: "hospitality-consultants-in-india",
  },
  {
    title:
      "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
    month: "August ",
    date: "26, 2023",
    desc: `Why is opening a cloud kitchen a good idea? Here’s`,
    link: "how-to-start-cloud-kitchen-in-india-ultimate-guide-to-open-the-cloud-kitchen",
  },
];
