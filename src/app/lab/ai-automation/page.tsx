import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import NextExperiment from "@/components/NextExperiment";

export const metadata = {
  title: "AI Automation — The Lab",
};

export default function AIAutomationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedText 
        text="AI AUTOMATION" 
        as="h1"
        className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12"
      />
      
      <FadeIn delay={0.2}>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium mb-32 border-l border-accent pl-6">
          Using automation to reduce repetitive work and connect tools together.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-32">
        <FadeIn delay={0.3}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-8 uppercase">01 / Concept</h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line">
            I explore AI automation not as an enterprise software engineer, but as a marketer and operator looking to solve daily friction.
            
            The focus is on pragmatic workflows: taking data from one place, processing it with AI to extract meaning, and routing it to where it needs to be—whether that's a dashboard, a messaging app, or a content schedule.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="text-sm font-mono tracking-widest text-accent mb-12 uppercase">02 / Tools & Explorations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold tracking-tight">n8n Workflows</h3>
              <p className="text-white/60 leading-relaxed">
                Building custom node-based automations to connect external APIs, manage webhooks, and trigger background tasks without heavy manual scripting.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold tracking-tight">Telegram & WhatsApp</h3>
              <p className="text-white/60 leading-relaxed">
                Creating workflow concepts where notifications, data summaries, and quick actions are routed directly to messaging apps for instant operational visibility.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold tracking-tight">AI Agents</h3>
              <p className="text-white/60 leading-relaxed">
                Experimenting with autonomous agents that can interpret ambiguous user requests, execute multi-step logic, and format data for business use cases.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold tracking-tight">Content Automation</h3>
              <p className="text-white/60 leading-relaxed">
                Pipelines that scrape trends, aggregate insights, and generate drafts to accelerate the creative process, rather than replace it completely.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <NextExperiment href="/lab/digital-products" label="Digital Products" />
    </div>
  );
}
