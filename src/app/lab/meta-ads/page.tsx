import { getDictionary } from "@/utils/dictionary";
import { cookies } from "next/headers";
import MetaAdsClient from "./ClientPage";

export const metadata = {
  title: "Meta Ads & Performance — The Lab",
};

export default async function MetaAdsPage() {
  const dictionary = await getDictionary();
  const data = dictionary.labPages.metaAds;
  const cookieStore = await cookies();
  const isId = cookieStore.get("NEXT_LOCALE")?.value === "id";

  return <MetaAdsClient data={data} isId={isId} />;
}
