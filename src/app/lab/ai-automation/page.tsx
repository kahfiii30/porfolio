import { getDictionary } from "@/utils/dictionary";
import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import NextExperiment from "@/components/NextExperiment";
import { cookies } from "next/headers";

export const metadata = {
  title: "AI Automation — The Lab",
};

export default async function AIAutomationPage() {
  const dictionary = await getDictionary();
  const data = dictionary.labPages.aiAutomation;
  const cookieStore = await cookies();
  const isId = cookieStore.get("NEXT_LOCALE")?.value === "id";

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedText 
        text={data.title} 
        as="h1"
        className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12"
      />
      
      <FadeIn delay={0.2}>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium mb-32 border-l border-accent pl-6">
          {data.subtitle}
        </p>
      </FadeIn>

      <div className="flex flex-col gap-32">
        <FadeIn delay={0.3}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-8 uppercase">{data.section1Title}</h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line">
            {data.section1Text}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-12 uppercase">{data.section2Title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {data.tools.map((tool) => (
              <div key={tool.name} className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold tracking-tight">{tool.name}</h3>
                <p className="text-white/60 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <NextExperiment href="/lab/digital-products" label={data.next} isId={isId} />
    </div>
  );
}
