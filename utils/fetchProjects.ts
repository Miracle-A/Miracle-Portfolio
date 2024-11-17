import { Project } from "../typings";

export const fetchProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    );

    // Check if the response was successful
    if (!res.ok) {
      // You can throw an error or handle this situation as needed
      throw new Error(`API responded with status code ${res.status}`);
    }

    // Safely parsing the JSON
    const data = await res.json();
    if (!data.projects) {
      // Handle the case where the expected data is not present
      throw new Error("Projects data is not available in the response");
    }

    const projects: Project[] = data.projects;
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Handle the error, e.g., by returning a default value or re-throwing the error
    // For example, return an empty array or null, based on how you want to handle this in your application
    return [];
  }
};
