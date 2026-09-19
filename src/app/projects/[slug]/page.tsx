import { getDictionary } from "@/utils/dictionary";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const portfolioData: any = await getDictionary();
  const { slug } = await params;
  const project: any = portfolioData.projects.find((p: any) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title.replace(/\n/g, " ")} — Abdul Azis Al Kahfi`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const portfolioData: any = await getDictionary();
  const { slug } = await params;
  const project: any = portfolioData.projects.find((p: any) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col w-full min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <FadeIn>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </FadeIn>

        {/* Header */}
        <header className="mb-20">
          <AnimatedText
            text={project.title}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8 whitespace-pre-line"
          />
          <FadeIn delay={0.2} className="flex flex-col md:flex-row gap-6 md:items-end justify-between border-t border-white/10 pt-8 mt-12">
            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                {project.shortDescription}
              </p>
              {project.note && (
                <p className="text-sm text-accent mt-4 bg-accent/10 px-3 py-1 rounded-full w-fit">
                  {project.note}
                </p>
              )}
            </div>
            
            <div className="flex flex-col gap-1 text-sm font-mono tracking-wider text-white/50 uppercase">
              <span>Category</span>
              <span className="text-white font-medium max-w-[200px]">{project.category}</span>
            </div>
          </FadeIn>
        </header>

        {/* Hero Visual */}
        <FadeIn delay={0.4}>
          <div className="w-full aspect-video bg-surface rounded-2xl mb-24 overflow-hidden relative flex items-center justify-center border border-white/5">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="text-white/5 font-mono text-4xl sm:text-5xl md:text-9xl font-bold uppercase overflow-hidden whitespace-nowrap select-none text-center">
                {project.title.replace(/\n/g, " ")}
              </div>
            )}
          </div>
        </FadeIn>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-24">
          
          {/* Sidebar */}
          <aside className="flex flex-col gap-12">
            {project.role && (
              <FadeIn>
                <h3 className="text-sm font-mono tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">ROLE</h3>
                <ul className="flex flex-col gap-1 text-white/70">
                  {project.role.map((r: string, i: number) => (
                    <li key={i} className="font-medium text-white/80">{r}</li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {project.workedOn && (
              <FadeIn>
                <h3 className="text-sm font-mono tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">WORKED ON</h3>
                <ul className="flex flex-col gap-1 text-white/70">
                  {project.workedOn.map((w: string, i: number) => (
                    <li key={i} className="font-medium text-white/80">{w}</li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {project.tech && (
              <FadeIn>
                <h3 className="text-sm font-mono tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">TECH / TOOLS</h3>
                <ul className="flex flex-col gap-2">
                  {project.tech.map((t: string, i: number) => (
                    <li key={i} className="font-medium text-white/80">{t}</li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {project.link && (
              <FadeIn>
                <h3 className="text-sm font-mono tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">LIVE PROJECT</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline flex items-center gap-1"
                >
                  Visit Website <ArrowUpRight className="w-4 h-4" />
                </a>
              </FadeIn>
            )}
          </aside>
          {/* Main Content */}
          <div className="flex flex-col gap-20">
            <div className="space-y-16">
              {project.snapshot && (
                <>
                  <FadeIn>
                    <h2 className="text-3xl font-bold mb-4 tracking-tight">Objective</h2>
                    <p className="text-lg text-white/70 leading-relaxed whitespace-pre-line">
                      {project.snapshot.objective}
                    </p>
                  </FadeIn>
                  <FadeIn>
                    <h2 className="text-3xl font-bold mb-4 tracking-tight">Problem</h2>
                    <p className="text-lg text-white/70 leading-relaxed whitespace-pre-line">
                      {project.snapshot.problem}
                    </p>
                  </FadeIn>
                  {project.snapshot.approach && (
                    <FadeIn>
                      <h2 className="text-3xl font-bold mb-6 tracking-tight">Approach</h2>
                      <ul className="flex flex-col gap-4">
                        {project.snapshot.approach.map((a: string, i: number) => (
                          <li key={i} className="flex gap-4 items-start">
                            <span className="text-accent font-mono mt-1">0{i + 1}</span>
                            <span className="text-lg text-white/80">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </FadeIn>
                  )}
                  {project.snapshot.learning && (
                    <FadeIn>
                      <h2 className="text-3xl font-bold mb-4 tracking-tight">Learning</h2>
                      <p className="text-lg text-white/70 leading-relaxed whitespace-pre-line font-medium border-l-2 border-accent pl-6 py-2">
                        {project.snapshot.learning}
                      </p>
                    </FadeIn>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
