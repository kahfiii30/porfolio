import { cookies } from "next/headers";
import OgStoreCaseStudyClient from "./OgStoreClient";
import { ogStoreData } from "@/data/ogStore";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const data = locale === "id" ? ogStoreData.id : ogStoreData.en;

  return {
    title: `${data.title} — Abdul Azis Al Kahfi`,
    description: data.labels.heroDesc + " " + data.title,
  };
}

export default async function OgStoreCaseStudyPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  
  const data = locale === "id" ? ogStoreData.id : ogStoreData.en;

  return <OgStoreCaseStudyClient data={data} />;
}
