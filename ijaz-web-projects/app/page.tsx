import Image from "next/image";
import Link from "next/link";
import { aboutMeData } from "./data/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center mb-3">
      <section className="flex sm:flex-row  sm:w-10/12 mt-10 mb-6 items-center flex-col w-full p-4">
        <div className="sm: w-1/3  w-full  flex justify-center">
          <Image
            width={540}
            height={960}
            alt={"ijaz"}
            src={"/images/ijaz.PNG"}
            priority={false}
            className="profileImage"
          />
        </div>
        <div className=" sm:ml-0 w-2/3  w-full mt-2 sm:mt-0 ">
          <h2>{aboutMeData.title}</h2>
          <p className="text-base text-xl ">{aboutMeData.body}</p>
        </div>
      </section>
      <section className="w-full my-8 bg-blue-light p-10 h-full sm:w-full p-4">
        <p className="text-xl p-50   sm:w-full sm:p-1">{aboutMeData.highlightedBody}</p>
      </section>
      <section className="flex flex-col sm:flex-row">
        <div className="flex items-center">
          <h1 className="text-center text-black text-3xl">Visit My Fiverr Profile</h1>
        </div>
      </section>
      <section className="flex  w-10/12 items-center bg-black w-full p-5 flex flex-col sm:flex-row">
        <div className="grid grid-flow-row sm:grid-flow-col">
          <div className="w-1/2  p-4 sm:flex-row w-full ">
            <p className="text-base text-white text-xl sm:w-full">
              {aboutMeData.body2}
            </p>
            <br></br>
            <Link
              href="https://www.fiverr.com/ijazdev101?"
              className="text-white text-lg "
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiverr Profile Link
            </Link>
          </div>
          <div className="sm:w-full">
            <Image
              width={640}
              height={1100}
              alt={"ijaz"}
              src={"/images/fiverr-profile.png"}
              priority={false}
              className="sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row">
        <div className="flex items-center">
          <h1 className="text-center text-black text-3xl">Visit My Fiverr Profile</h1>
        </div>
      </section>
      <section className="flex flex-row w-full items-center bg-black w-full p-5 flex flex-col  ">
        <div className="grid grid-flow-row sm:grid-flow-col gap-3">
          <div className=" sm:w-full ">
            <Image
              width={840}
              height={1100}
              alt={"ijaz"}
              src={"/images/upwork-profile.png"}
              priority={false}
              className=""
            />
          </div>
          <div className="w-1/2  p-4 sm:flex-row w-full">
            <p className="text-base text-white text-xl sm:w-full">
              As a highly skilled frontend web developer with over 4 plus years
              of experience, I am proud to be a top-rated plus freelancer in my
              field. My expertise lies in JavaScript, TypeScript, ReactJS,
              NextJS, and Tailwind CSS. If you're in need of a top-quality
              frontend developer to convert your PSD designs to responsive HTML,
              CSS Bootstrap, PSD to ReactJS, or NextJS, I've got you covered. In
              addition to these services, I am also proficient in designing and
              developing websites using WordPress and Shopify. With a keen eye
              for detail and a passion for creating visually stunning,
              responsive websites, I take pride in providing my clients with the
              best possible solutions to their online needs. So, if you're
              looking for a reliable and skilled frontend developer to help you
              bring your vision to life, look no further. Let's work together to
              create a website that exceeds your expectations
            </p>
            <br></br>
            <Link
              href="https://www.upwork.com/freelancers/~01059999dcb82574a9"
              className="text-white text-lg "
              target="_blank"
              rel="noopener noreferrer"
            >
              Upwork Profile Link
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
