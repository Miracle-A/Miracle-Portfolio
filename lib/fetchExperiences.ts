// Assuming the Sanity client and typings are set up similar to fetchPageInfo
import { sanityClient } from "./sanity";
import { groq } from "next-sanity";

import { Experience } from "../typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export async function fetchExperiences(): Promise<Experience[]> {
  try {
    const experiences: Experience[] = await sanityClient.fetch(query);
    if (!experiences || !Array.isArray(experiences)) {
      throw new Error("Invalid data structure received from the API");
    }
    return experiences;
  } catch (error) {
    console.error("Failed to fetch experiences:", error);
    throw error;
  }
}
