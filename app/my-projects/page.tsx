import React from "react";
import { ProjectCard } from "../components/project-card";
import { Projects } from "../data/data";

const MyProjects = () => {
  return (
    <div className="flex flex-col  w-11/12 content-center m-auto mt-30">
      <h2 className="text-2xl font-bold mb-4">My Projects </h2>
      <div className="flex flex-row flex-wrap gap-10 mt-6">
        {Projects.map((Projects) => {
          return <ProjectCard data={Projects} />;
        })}
      </div>
    </div>
  );
};

export default MyProjects;
