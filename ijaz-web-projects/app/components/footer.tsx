import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex flex flex-col p-10 sm:flex-row">
          <div className="w-1/2 p-5 sm:p-1 w-full">
            <p className="text-xl">
              My name is Ijaz Ullah, and I am a highly skilled web developer
              with over 4 years of experience in the industry. As a testament to
              my expertise and proficiency in the field, <br />
              <br />I am a top-rated Plus freelancer as a web developer on
              Upwork and hold a Level 2 badge on Fiverr. Over the years,
            </p>
          </div>
          <div className="w-1/2  sm:p-1 w-full p-4 w-full">
            <div>
              <h1 className="text-2xl">My Accounts </h1>
              <div className="flex">
                <a
                  href="https://github.com/ijazkhan101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={44} />
                  <span>Github </span>
                </a>

                <a
                  href="https://www.upwork.com/freelancers/~01059999dcb82574a9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/ijaz-upwork.png"
                    alt="My Image"
                    width={44}
                    height={44}
                    className="ml-4"
                  />
                  <span className="ml-4">Upwork </span>
                </a>

                <a
                  href="https://www.fiverr.com/ijazdev101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/fiverr-icon-png.png"
                    alt="My Image"
                    width={46}
                    height={40}
                    className="ml-1"
                  />
                  <span className="ml-1 ">Fiverr </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
