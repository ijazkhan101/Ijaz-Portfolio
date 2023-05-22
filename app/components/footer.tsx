import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col p-10 sm:flex-row">
          <div className="w-1/2 p-5 sm:p-1">
            <p className="text-xl text-black">
              My name is Ijaz Ullah, and I am a highly skilled web developer
              with over 4 years of experience in the industry. As a testament to
              my expertise and proficiency in the field, <br />
              <br />I am a top-rated Plus freelancer as a web developer on
              Upwork and hold a Level 2 badge on Fiverr. Over the years,
            </p>
          </div>
          <div className="w-full p-4 sm:p-1">
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
                  <span className="ml-2 ">Fiverr </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ijaz-ullah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 "
                >
                  <FaLinkedin size={48} color="#0077B5" />
                  <span className="ml-1 ">Linkedin </span>
                </a>
                <a
                  href="https://twitter.com/ijazkhan101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 "
                >
                  <FaTwitter size={48} color="#1DA1F2" />
                  <span className="ml-1 ">Twitter </span>
                </a>
                <a
                  href="https://www.behance.net/ijazullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 "
                >
                  <FaBehance size={48} color="#1769FF" />
                  <span className="ml-1 ">Behance </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
