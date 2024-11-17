// lib/fetchSkills.ts
import { sanityClient } from "./sanity";
import { groq } from "next-sanity";

import { Skill } from "../typings";

// Execute Query
const query = groq`
  *[_type == "skill"]
`;
type Data = {
  skills: Skill[];
};

export async function fetchSkills(): Promise<Skill[]> {
  try {
    const skillsData: Skill[] = await sanityClient.fetch(query);
    // Additional validation or manipulation of skillsData can be done here if necessary
    return skillsData;
  } catch (error) {
    console.error("Error fetching skills:", error);
    // Decide how to handle the error: return a default value or rethrow the error
    // For example, return an empty array or rethrow the error
    return []; // or throw error;
  }
}
