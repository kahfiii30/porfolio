import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import NextExperiment from "@/components/NextExperiment";

export const metadata = {
  title: "Web Experiments — The Lab",
};

export default function WebExperimentsPage() {
  const tools = [
    { name: "GitHub", use: "Version control and deployment pipelines." },
    { name: "Vercel", use: "Hosting, edge functions, and analytics." },
    { name: "Next.js", use: "React framework for production-grade applications." },
    { name: "Supabase", use: "Backend as a Service, PostgreSQL, and authentication." },
    { name: "AI Assistants", use: "Accelerating development, debugging, and ideation." },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedText 
        text="WEB EXPERIMENTS" 
        as="h1"
        className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12"
      />
      
      <FadeIn delay={0.2}>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium mb-32 border-l border-accent pl-6">
          Learning by building and shipping. Exploring the intersection of design, code, and product.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-32">
        <FadeIn delay={0.3}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-8 uppercase">01 / The Approach</h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line">
            I am not a senior software engineer, nor do I pretend to be one. 
            
            My approach to web development is purely driven by experimentation: having an idea, opening an editor, utilizing AI to bridge technical gaps, and shipping something that works.
            
            This allows me to rapidly prototype ideas, test marketing hypotheses in the real world, and understand the technical constraints of the products I market.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-12 uppercase">02 / The Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="p-8 border border-white/10 rounded-2xl flex flex-col gap-3 hover:border-accent hover:bg-white/[0.02] transition-colors">
                <h3 className="text-2xl font-bold tracking-tight">{tool.name}</h3>
                <p className="text-white/60 leading-relaxed">{tool.use}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <NextExperiment href="/lab/ai-automation" label="AI Automation" />
    </div>
  );
}
