import { cookies } from "next/headers";
import { portfolioData as en } from "@/data/en";
import { portfolioData as id } from "@/data/id";

export async function getDictionary() {
  // Use cookies to read NEXT_LOCALE
  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  
  return locale === "id" ? id : en;
}
