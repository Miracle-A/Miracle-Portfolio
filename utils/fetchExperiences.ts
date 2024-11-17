import { Experience } from "../typings";

export const fetchExperiences = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    );

    // Check if the fetch request was successful
    if (!res.ok) {
      throw new Error(
        `An error occurred while fetching the data: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();

    // Optionally, validate the data structure here
    if (!data.experiences || !Array.isArray(data.experiences)) {
      throw new Error("Invalid data structure received from the API");
    }

    const experiences: Experience[] = data.experiences;
    return experiences;
  } catch (error) {
    // Log the error (or handle it as needed)
    console.error("Failed to fetch experiences:", error);
    // Optionally, you can throw the error again or return a default value
    throw error; // or return [];
  }
};
