import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
const HeroBg = React.lazy(() => import("../components/heroBackground"));

const hours = [
  {
    key: 0,
    info: "Mondays - 9 am - 1 pm",
  },
  {
    key: 1,
    info: "Tuesdays - 11 am - 3 pm ",
  },
  {
    key: 2,
    info: "Wednesdays - 11 am - 3 pm ",
  },
  {
    key: 3,
    info: "Thursdays - 9 am - 1 pm",
  },
  {
    key: 4,
    info: "Fridays - 11 am - 3 pm",
  },
];

const Home = () => {
  return (
    <>
      <HeroBg />
      <div className="relative z-50 mb-24">
        <h1 className="text-4xl mt-24 text-primary-100 font-medium">
          When you need <br /> help, we are here <br /> for you.
        </h1>

        <p className="mt-12 text-lg text-medium">
          Our services are confidential <br /> and free
        </p>
        <span className="text-lg font-medium">
          Call us: <span className="font-bold"> 544-631-7336 </span> <br />
          Visit us:{" "}
          <span className="font-bold">
            {" "}
            Lorem ipsum dolor sit, <br /> Hall{" "}
          </span>
        </span>

        <Image
          src="/img/knustCompound.jpg"
          alt="logo"
          className="w-[680px] absolute -right-12 -top-12 h-[340px] "
        />
      </div>

      <div>
        <h3 className="my-4 text-3xl text-primary-100 font-medium">
          Announcements:
        </h3>
        <p className="text-base font-semibold mb-5 text-[#333]">
          <span className="leading-8">
            Adjusted drop-in times /adjusted office hours for Summer 2023 are
            listed below:
          </span>
          <br />
          <span className="leading-8">
            As of Tuesday, May 30, the office will be closed at 4:30 pm.
          </span>
          <br />
          <span className="leading-8">
            The office will be CLOSED on the following dates:
          </span>
        </p>

        <p className="text-base text-[#333333] ">
          Wednesday, August 2 all day
          <br />
          Thursday, August 3 - the UCC will close at 11:30 am - no Drop-in hours
        </p>

        <h4 className=" text-[#333] font-semibold my-2">
          Drop-in hours (Tuesday, May 30 - Friday, July 28){" "}
        </h4>

        <ul className="mb-12">
          {hours.map((time) => (
            <li key={time.key} className="text-base text-[#333333] mb-1">
              {time.info}
            </li>
          ))}
        </ul>
        <p className="text-base mb-12 text-[#333333]">
          College is a time of major transition, change, and growth. It can be
          exciting and challenging and, at times, overwhelming, too. The
          stressors of college life may impact your mental health and make it
          difficult to manage daily life and often rigorous academic demands.
          The University Counseling Center (UCC) is here to help. Here, we
          provide a safe, confidential, nonjudgmental space where students can
          explore a wide variety of issues and concerns. Our services include
          crisis intervention, brief consultations, workshops, Drop-In services,
          group and individual counseling, psychiatric care for medication
          management, and referrals to off-campus treatment providers. All UCC
          services are confidential, free, and available to all degree-seeking
          students currently enrolled at the University of Notre Dame.
        </p>
      </div>
    </>
  );
};

export default Home;
