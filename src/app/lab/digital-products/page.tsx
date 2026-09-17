import { getDictionary } from "@/utils/dictionary";
import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import NextExperiment from "@/components/NextExperiment";
import { cookies } from "next/headers";

export const metadata = {
  title: "Digital Products — The Lab",
};

export default async function DigitalProductsPage() {
  const dictionary = await getDictionary();
  const data = dictionary.labPages.digitalProducts;
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
        {data.projects.map((proj) => (
          <FadeIn key={proj.title} delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 pb-6 border-b border-white/10">
              {proj.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-mono tracking-widest text-white/40 uppercase">Idea</span>
                <p className="text-lg text-white/90">{proj.idea}</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <span className="text-sm font-mono tracking-widest text-white/40 uppercase">Technology</span>
                <p className="text-lg text-white/90">{proj.tech}</p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-mono tracking-widest text-accent uppercase">Problem</span>
                <p className="text-lg text-white/70 leading-relaxed">{proj.problem}</p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-mono tracking-widest text-accent uppercase">Solution</span>
                <p className="text-lg text-white/70 leading-relaxed">{proj.solution}</p>
              </div>

              <div className="flex flex-col gap-3 md:col-span-2 mt-4 p-8 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-sm font-mono tracking-widest text-white/40 uppercase">What Was Learned</span>
                <p className="text-lg text-white/80 leading-relaxed italic">"{proj.learned}"</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <NextExperiment href="/lab/marketing-systems" label={data.next} isId={isId} />
    </div>
  );
}
