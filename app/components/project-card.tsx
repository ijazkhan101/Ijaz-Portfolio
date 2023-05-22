import Image from "next/image";
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from 'react-icons/fa';

type ProjectCardProps = {
    data:{
        title:string;
        body1:string;
        image:string;
        links:{
            text:string;
            url:string;
        }[];
    };
};
export const ProjectCard = ({data}: ProjectCardProps) => {
    const {title , body1 , image, links} =data;
    return (
        <div className="rounded-lg shadow-lg bg-gray-light p-3 w-1/4 sm:w-1/3g">
            <Image
            aria-label={`Image of ${title}`}
                src={`/images/${image}`}
                alt={title }
                className='
                 w-full'
                priority={false}
                width={50}
                height={350}

            />
            <div className="p-4">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-sm mt-2 min-h-50">{body1}</p>
                <div className="flex flex-row mt-2 justify-between">
                    <a href={links[0].url} className="flex items-center" target="_blank">
                    <FaGithub size={20} />
                    <span className="text-black">{links[0].text}</span>
                    </a>
                    <a href={links[1].url} className="flex items-center" target="_blank">
                    <FaGlobe size={20} />
                    <span className="text-black">{links[1].text}</span>
                    </a>

                </div>
            </div>
        </div>
    )
}
