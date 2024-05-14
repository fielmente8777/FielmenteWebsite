import Link from "next/link";
import React from "react";

function page() {
  return (
    <section>
      <div className="bg-[#1E1928]">
        <div className="max-width grid grid-cols-2">
          <div>
            <h2>
              Hospitality Social Media Marketing: Forge lasting bonds with
              customers, fueling exponential business growth!
            </h2>
            <p>
              At Fielmente, our expertise lies in crafting hospitality social
              media marketing campaigns and content with a remarkable ROI,
              elevating brand visibility, nurturing customer relationships, and
              driving sales like never before.
            </p>

            <div>
              <Link href={"/"}>Know More</Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default page;
