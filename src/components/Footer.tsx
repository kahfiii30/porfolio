"use client";

import { useEffect, useState } from "react";

export default function Footer({ currentLocale = "en" }: { currentLocale?: string }) {
  const [time, setTime] = useState("");
  const isId = currentLocale === "id";
  const getYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Makassar", // Samarinda timezone (GMT+8)
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(date));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-black text-white/50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-sm font-medium tracking-wide">
            © {getYear} Abdul Azis Al Kahfi.
          </p>
          <p className="text-xs">
            {isId ? "Dirancang & Dibangun di Samarinda." : "Designed & Built in Samarinda."}
          </p>
        </div>
        
        <div className="flex flex-col md:items-end gap-1">
          <span className="font-medium">Samarinda, Indonesia</span>
          <span className="text-white/60 text-sm font-mono tracking-wider">
            SAMARINDA — {time ? `${time} GMT+8` : "LOADING..."}
          </span>
        </div>
      </div>
    </footer>
  );
}
