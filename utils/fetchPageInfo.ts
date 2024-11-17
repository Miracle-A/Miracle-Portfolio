import { PageInfo } from "../typings";

export const fetchPageInfo = async (): Promise<PageInfo | null> => {
  try {
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      // Handle response errors (e.g., 404, 500)
      console.error("Failed to fetch page info, Status:", res.status);
      return null; // or return some default PageInfo structure
    }

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching page info:", error.message, error.stack);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    return null;
  }
};
