import { Social } from "../typings";

export const fetchSocial = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    );

    if (!res.ok) {
      // Handle HTTP errors, e.g., 404, 500
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();

    if (!data.socials) {
      // Handle the case where the expected data is not present
      throw new Error("No social data found in response");
    }

    const socials: Social[] = data.socials;
    return socials;
  } catch (error) {
    console.error("Error fetching social data:", error);
    // Handle the error as required, e.g., return default data or rethrow the error
    // return []; // Example: Returning an empty array as a fallback
    throw error; // or rethrow the error if you want to handle it in getStaticProps
  }
};
