import React from "react";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/Techdigiedu_logo.png"
      width={size}
      height={size}
      alt="TechDigiEdu logo"
      className="h-10 w-10 rounded-xl object-cover"
      loading="lazy"
    />
  );
}

export default function Logo({ showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={40} />
      {showText && (
        <span className="text-xl font-extrabold tracking-tight leading-none">
          <span style={{ background: "linear-gradient(135deg, #6d4aff, #0bc5ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            TechDigi
          </span>
          <span className="text-foreground">Edu</span>
        </span>
      )}
    </div>
  );
}
