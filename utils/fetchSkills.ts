import { Skill } from "../typings";

export const fetchSkills = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    );

    // Check if the response is successful
    if (!res.ok) {
      console.error("Failed to fetch skills:", res.status, res.statusText);
      // Handle the error - either throw an error or return a default value
      throw new Error(`An error occurred: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    // Validate the data structure
    if (!data || !data.skills) {
      console.error("Invalid data structure:", data);
      throw new Error("Invalid data structure received from API");
    }

    const skills: Skill[] = data.skills;
    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    // Decide how to handle the error: return a default value or rethrow the error
    // For example, return an empty array or rethrow the error
    return []; // or throw error;
  }
};
