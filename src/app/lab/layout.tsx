import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cookies } from "next/headers";

export default async function LabLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isId = cookieStore.get("NEXT_LOCALE")?.value === "id";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white pb-32">
      <header className="py-8 px-6 md:px-12 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="container mx-auto">
          <Link 
            href="/#lab" 
            className="inline-flex items-center gap-2 text-sm font-mono tracking-widest text-white/60 hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {isId ? "KEMBALI KE THE LAB" : "BACK TO THE LAB"}
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-6 md:px-12 pt-24">
        {children}
      </main>
    </div>
  );
}
