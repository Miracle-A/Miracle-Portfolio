// Assuming you have a similar setup for your sanityClient and typings
import { sanityClient } from "./sanity";
import { Social } from "../typings";

const socialQuery = `
  *[_type == "social"]
`;

export async function fetchSocial(): Promise<Social[]> {
  try {
    const data = await sanityClient.fetch(socialQuery);

    if (!data) {
      // Handle the case where the expected data is not present
      throw new Error("No social data found in response");
    }

    const socials: Social[] = data; // Assuming the structure matches your needs
    return socials;
  } catch (error) {
    console.error("Error fetching social data:", error);
    // Handle the error as required, e.g., return default data or rethrow the error
    // return []; // Example: Returning an empty array as a fallback
    throw error; // or rethrow the error if you want to handle it in getStaticProps
  }
}
