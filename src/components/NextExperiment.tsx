import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cookies } from "next/headers";

interface NextExperimentProps {
  href: string;
  label: string;
}

export default function NextExperiment({ href, label }: NextExperimentProps) {
  const cookieStore = cookies();
  const isId = cookieStore.get("NEXT_LOCALE")?.value === "id";

  return (
    <div className="mt-40 border-t border-white/10 pt-16">
      <Link 
        href={href} 
        className="group flex flex-col gap-4 w-fit"
      >
        <span className="text-sm font-mono tracking-widest text-white/40 group-hover:text-accent transition-colors">
          {isId ? "EKSPERIMEN BERIKUTNYA" : "NEXT EXPERIMENT"}
        </span>
        <div className="flex items-center gap-6">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white group-hover:text-accent transition-colors">
            {label}
          </h3>
          <ArrowRight className="w-8 h-8 text-white/20 group-hover:text-accent group-hover:translate-x-4 transition-all duration-500" />
        </div>
      </Link>
    </div>
  );
}
