import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import NextExperiment from "@/components/NextExperiment";

export const metadata = {
  title: "Digital Products — The Lab",
};

export default function DigitalProductsPage() {
  const projects = [
    {
      title: "WealthPilot",
      idea: "Personal finance visualization.",
      problem: "Most finance apps are either too complex (like a spreadsheet) or too simple. Users struggle to understand their true net worth and cash flow trend.",
      solution: "A sleek, dark-mode fintech dashboard that automatically visualizes net worth, categorizes expenses, and highlights 6-month trends.",
      tech: "React, Next.js, UI/UX Design",
      learned: "Designing dense data dashboards requires strict typography hierarchy and extremely constrained color palettes to avoid overwhelming the user."
    },
    {
      title: "Sampride",
      idea: "Minimalist productivity checklist.",
      problem: "Traditional to-do apps introduce too much friction with due dates, tags, and folders, causing users to abandon them.",
      solution: "A frictionless, visually premium checklist that focuses solely on what needs to be done today, with zero setup required.",
      tech: "Web Technologies, Interface Design",
      learned: "Subtracting features is often much harder than adding them. The premium feel comes from generous whitespace and fluid interaction, not complex functionality."
    },
    {
      title: "Kahfi Audit Marketing",
      idea: "Interactive business diagnosis.",
      problem: "Small businesses know they need marketing, but they don't know where their actual bottleneck is (Offer? Content? Distribution?).",
      solution: "An interactive assessment tool that guides owners through their customer journey, outputting a clear visual diagnosis.",
      tech: "Strategy mapping, Web Architecture",
      learned: "Framing marketing as a systemic workflow rather than 'just making content' changes how clients perceive the value of the service."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedText 
        text="DIGITAL PRODUCTS" 
        as="h1"
        className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12"
      />
      
      <FadeIn delay={0.2}>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium mb-32 border-l border-accent pl-6">
          Turning ideas into usable digital tools and interface experiments.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-32">
        {projects.map((proj, i) => (
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

      <NextExperiment href="/lab/marketing-systems" label="Marketing Systems" />
    </div>
  );
}
