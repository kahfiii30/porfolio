import { getDictionary } from "@/utils/dictionary";
import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import NextExperiment from "@/components/NextExperiment";
import { cookies } from "next/headers";

export const metadata = {
  title: "Marketing Systems — The Lab",
};

export default async function MarketingSystemsPage() {
  const dictionary = await getDictionary();
  const data = dictionary.labPages.marketingSystems;
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
          <h2 className="text-sm font-mono tracking-widest text-accent mb-12 uppercase">{data.section1Title}</h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line mb-12">
            {data.section1Text}
          </p>
          
          <div className="p-8 md:p-16 border border-white/10 rounded-3xl bg-white/[0.02]">
            <div className="flex flex-col gap-8 relative">
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:left-1/2 md:-ml-[0.5px]" />
              
              {data.workflow.map((item, i) => (
                <div key={item.step} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse text-left' : 'text-left md:text-right'}`}>
                  <div className="hidden md:block w-1/2" />
                  <div className="absolute left-6 w-2 h-2 rounded-full bg-accent md:left-1/2 md:-ml-1 z-10" />
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <h3 className="text-2xl font-bold tracking-tight mb-2">{item.step}</h3>
                    <p className="text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-12 uppercase">{data.section2Title}</h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line mb-12">
            {data.section2Text}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.touchpoints.map((touchpoint) => (
              <div key={touchpoint} className="p-6 border border-white/10 rounded-2xl flex flex-col gap-4 bg-black hover:border-accent transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="font-bold">{touchpoint}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <NextExperiment href="/lab/meta-ads" label={data.next} isId={isId} />
    </div>
  );
}
