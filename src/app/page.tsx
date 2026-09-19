import { getDictionary } from "@/utils/dictionary";
import AnimatedText, { FadeIn } from "@/components/AnimatedText";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import ForceScrollToTop from "@/components/ForceScrollToTop";

export default async function Home() {
  const portfolioData: any = await getDictionary();
  const {
    hero,
    marquee,
    about,
    coreCompetencies,
    projects,
    toolsConfig,
    experience,
    careerStory,
    notJustContent,
    lab,
    labSection,
    philosophy,
    principles,
    contact,
  } = portfolioData;

  return (
    <main className="flex flex-col w-full overflow-hidden">
      <ForceScrollToTop />
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="container mx-auto">
          <FadeIn delay={0.1}>
            <p className="text-sm tracking-widest font-mono text-white/60 mb-8 whitespace-pre-line">
              {hero.eyebrow}
            </p>
          </FadeIn>
          
          <AnimatedText 
            text={hero.headline} 
            className="text-[12vw] leading-[0.9] md:text-7xl lg:text-9xl font-bold tracking-tighter mb-12"
          />
          
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end border-t border-white/10 pt-8 mt-12 max-w-5xl">
            <FadeIn delay={0.8} className="max-w-md">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line">
                {hero.description}
              </p>
            </FadeIn>
            
            <FadeIn delay={1.0} className="flex flex-col gap-4">
              <a 
                href="#work" 
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider group hover:text-accent transition-colors"
              >
                Explore Selected Work 
                <ArrowDownRight className="w-4 h-4 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 bg-surface border border-white/10 rounded-full px-4 py-2 w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 opacity-80"></span>
                </span>
                <span className="text-xs font-medium tracking-wide">{hero.status}</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marquee} />

      {/* Intro / About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-light-bg text-light-fg">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          <AnimatedText 
            text={about.statement} 
            as="h2"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none"
          />
          <FadeIn delay={0.2} className="max-w-xl text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium opacity-80">
            {about.description}
          </FadeIn>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="container mx-auto">
          <AnimatedText 
            text={coreCompetencies.title} 
            as="h2"
            className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 whitespace-pre-line"
          />
          <FadeIn delay={0.2} className="mb-20">
            <p className="text-xl text-white/60 whitespace-pre-line">
              {coreCompetencies.subtitle}
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {coreCompetencies.groups.map((group: any, i: number) => (
              <FadeIn key={group.name} delay={i * 0.1} className="flex h-full">
                <div className="group flex flex-col h-full w-full">
                  <h3 className="text-sm font-mono tracking-widest text-accent mb-8 border-b border-white/10 group-hover:border-white/30 transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] pb-4 uppercase">
                    {group.id} — {group.name}
                  </h3>
                  <ul className="flex flex-col gap-4 mb-8 flex-grow">
                    {group.skills.map((skill: string) => (
                      <li key={skill} className="text-lg font-medium text-white group-hover:translate-x-[2px] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                        {skill}
                        {group.proof?.skill === skill && (
                          <span className="block mt-1.5 text-[10px] font-mono text-white/40 border border-white/10 rounded px-1.5 py-0.5 w-fit uppercase tracking-widest">
                            {group.proof.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-white/50 leading-relaxed whitespace-pre-line group-hover:translate-x-[2px] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] mt-auto">
                    {group.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="container mx-auto">
          <div className="mb-20">
            <AnimatedText 
              text="SELECTED\nWORK." 
              as="h2"
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-6 whitespace-pre-line"
            />
            <FadeIn delay={0.3}>
              <p className="text-xl text-white/60 max-w-md">
                A selection of marketing, business, and digital experiments.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-32">
            {projects.map((project: any, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">
              {toolsConfig.title}
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {toolsConfig.categories.map((category: any, i: number) => (
              <FadeIn key={category.name} delay={i * 0.1}>
                <h3 className="text-sm font-mono tracking-widest text-white/40 mb-6 border-b border-white/10 pb-4">
                  {category.name}
                </h3>
                <ul className="flex flex-col gap-4">
                  {category.tools.map((tool: string) => (
                    <li key={tool} className="text-xl font-medium text-white/80">{tool}</li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <AnimatedText 
              text="EXPERIENCE." 
              as="h2"
              className="text-5xl md:text-7xl font-bold tracking-tighter sticky top-32"
            />
          </div>
          
          <div className="flex flex-col gap-16">
            {experience.map((exp: any, i: number) => (
              <FadeIn key={i} delay={0.2}>
                <div className="group border-l border-white/20 pl-8 relative before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-white before:rounded-full before:transition-transform group-hover:before:scale-150 group-hover:before:bg-accent group-hover:border-accent transition-colors">
                  <p className="text-sm font-mono text-white/50 mb-3 uppercase tracking-wider">{exp.period}</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-accent font-medium mb-4">{exp.role}</p>
                  
                  {exp.highlight && (
                    <p className="text-sm font-medium bg-white/5 text-white px-3 py-1 w-fit rounded-md mb-4 border border-white/10">
                      {exp.highlight}
                    </p>
                  )}
                  
                  <p className="text-white/70 leading-relaxed max-w-2xl mb-6">
                    {exp.responsibilities}
                  </p>
                  
                  {exp.impact && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                      <p className="col-span-full text-xs font-mono text-white/40 tracking-widest uppercase mb-1">Selected Impact</p>
                      {exp.impact.map((metric: string, idx: number) => (
                        <div key={idx} className="bg-white/5 px-4 py-3 rounded-lg border border-white/10 text-sm font-medium text-white/90">
                          {metric}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Career Story Section */}
      <section className="py-32 px-6 md:px-12 bg-accent text-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedText 
            text={careerStory.headline} 
            as="h2"
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] whitespace-pre-line"
          />
          <FadeIn delay={0.2} className="max-w-xl text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium opacity-90">
            {careerStory.narrative}
          </FadeIn>
        </div>
      </section>

      {/* Not Just Content Section */}
      <section className="py-32 px-6 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center">
          <AnimatedText 
            text={notJustContent.title} 
            as="h2"
            className="text-4xl md:text-7xl font-bold tracking-tighter mb-12 whitespace-pre-line"
          />
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-white/70 whitespace-pre-line leading-relaxed font-mono">
              {notJustContent.copy}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Lab Section */}
      <section id="lab" className="py-32 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mb-16">
            <AnimatedText 
              text={labSection.title} 
              as="h2"
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 whitespace-pre-line"
            />
            <FadeIn delay={0.2}>
              <p className="text-xl text-white/60">
                {labSection.subtitle}
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col border-t border-white/10 mt-8">
            {lab.map((item: any, i: number) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Link 
                  href={`/lab/${item.slug}`} 
                  className="group relative border-b border-white/10 py-10 md:py-16 flex justify-between items-center transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#111111] cursor-pointer"
                  tabIndex={0}
                  aria-label={`Learn more about ${item.title}`}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-transparent group-hover:bg-accent transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  
                  <div className="flex flex-col gap-2 pl-6 md:pl-12 group-hover:translate-x-2 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/60 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hidden md:block">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pr-6 md:pr-12">
                    <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <ArrowDownRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:-rotate-45 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 md:px-12 text-center bg-light-bg text-light-fg border-y border-black/10">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          <AnimatedText 
            text={philosophy.quote} 
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-12 whitespace-pre-line"
          />
          <FadeIn delay={0.5}>
            <p className="text-lg md:text-xl font-medium opacity-70 whitespace-pre-line">
              {philosophy.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Working Principles */}
      <section className="py-32 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          {principles.map((principle: any, i: number) => (
            <FadeIn key={principle.title} delay={i * 0.2} className="flex flex-col gap-6">
              <span className="text-accent font-mono text-xl">0{i + 1}</span>
              <h3 className="text-2xl font-bold">{principle.title}</h3>
              <p className="text-white/60 whitespace-pre-line leading-relaxed">
                {principle.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="container mx-auto flex flex-col items-center">
          <AnimatedText 
            text={contact.headline} 
            as="h2"
            className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12 whitespace-pre-line"
          />
          <FadeIn delay={0.4} className="max-w-2xl mb-16">
            <p className="text-xl md:text-2xl text-white/70 whitespace-pre-line leading-relaxed">
              {contact.subheading}
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="flex flex-wrap justify-center gap-4 mb-24">
            <a href={`mailto:${contact.email}`} className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors">
              EMAIL ME
            </a>
            {contact.whatsapp && (
              <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-wide hover:border-white transition-colors">
                WHATSAPP
              </a>
            )}
            {contact.linkedin && (
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-wide hover:border-white transition-colors">
                LINKEDIN
              </a>
            )}
            {contact.github && (
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-wide hover:border-white transition-colors">
                GITHUB
              </a>
            )}
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
