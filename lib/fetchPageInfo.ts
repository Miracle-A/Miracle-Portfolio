// lib/fetchPageInfo.ts
import { sanityClient } from "./sanity";
import { PageInfo } from "../typings";

const query = `
  *[_type == "pageInfo"][0]
`;

export async function fetchPageInfo(): Promise<PageInfo> {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  return pageInfo;
}
