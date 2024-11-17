// lib/fetchProjects.ts
import { sanityClient } from "./sanity";
import { Project } from "../typings";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "project"]{
  ...,
  technologies[]->
  }
`;

export async function fetchProjects(): Promise<Project[]> {
  try {
    const projects: Project[] = await sanityClient.fetch(query);
    if (!projects || projects.length === 0) {
      // Handle the case where no projects are returned
      throw new Error("No projects data available");
    }
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Handle the error, e.g., by returning a default value or re-throwing the error
    // For example, return an empty array or null, based on how you want to handle this in your application
    return [];
  }
}
