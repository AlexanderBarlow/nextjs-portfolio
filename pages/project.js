import React, { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { useRouter } from "next/router";

export default function AllProjects() {
  const [userData, setUserData] = useState([]);

  const router = useRouter();

  const octokit = new Octokit({
    auth: "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",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "AlexanderBarlow";
        const response = await octokit.request("GET /users/:username/repos", {
          username,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        if (response.status === 200) {
          const projects = response.data;

          // Fetch languages for each project individually
          const projectsWithData = await Promise.all(
            projects.map(async (project) => {
              const languagesUrl = project.languages_url;

              if (languagesUrl) {
                try {
                  const languagesResponse = await fetch(languagesUrl, {
                    method: "GET",
                  });

                  if (languagesResponse.status === 200) {
                    const languagesData = await languagesResponse.json();
                    return { ...project, languagesData };
                  } else {
                    console.error(
                      `Failed to fetch languages for ${project.name}`
                    );
                    return null; // Return null for projects without languagesData
                  }
                } catch (error) {
                  console.error(
                    `Error fetching languages for ${project.name}`,
                    error
                  );
                  return null; // Return null for projects without languagesData
                }
              }

              return null; // Return null for projects without languagesData
            })
          );

          // Filter out projects without languagesData or with an empty object
          const filteredProjects = projectsWithData.filter(
            (project) =>
              project !== null && Object.keys(project.languagesData).length > 0
          );

          setUserData(filteredProjects);
        } else {
          console.error(
            `Failed to fetch GitHub repositories: ${response.statusText}`
          );
        }
      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
      }
    };

    // Fetch data only once on component mount
    fetchData();
  }, []); // Empty dependency array

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl mb-4 text-purple-700 mt-10">
        ALL PROJECTS
      </h1>
      <div className="flex flex-wrap justify-center m-4">
        {userData.map((item) => (
          <div
            className={
              "text-gray-300 hover:bg-gray-700 hover:text-white " +
              "rounded-md px-8 py-8 font-medium h-fit mb-4 mx-4 w-96"
            }
            key={item.id}
          >
            <a
              href={item.homepage || item.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-purple-700 xl:text-3xl lg:text-3xl sm:text-5xl">
                {item.name}{" "}
                <i
                  className="fa-solid fa-square-arrow-up-right fa-sm"
                  style={{ color: "#b332af" }}
                ></i>
              </h1>

              <div className="flex flex-wrap flex-row flex-100 h-fit">
                <p className="m-2 leading-relaxed h-fit w-11/12 lg:text-3xl sm:text-3xl sm:leading-normal">
                  {new Date(item.created_at).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <ul className="flex flex-wrap justify-start">
                {item.languagesData &&
                  Object.entries(item.languagesData).map(([name, value]) => {
                    const totalLines = Object.values(item.languagesData).reduce(
                      (acc, lines) => acc + lines,
                      0
                    );
                    const percentage = ((value / totalLines) * 100).toFixed(2);

                    return (
                      <li
                        key={name}
                        className="bg-purple-950 text-purple-400 font-semibold  xl:py-2 xl:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 sm:text-xl lg:text-xl xl:text-xl flex-25"
                      >
                        {name}: {value} lines ({percentage}%)
                      </li>
                    );
                  })}
              </ul>
            </a>
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-4 right-4 bg-purple-700 text-white py-3 px-6 rounded-full"
        onClick={handleBackToHome}
      >
        Back to Home
      </button>
    </div>
  );
}
