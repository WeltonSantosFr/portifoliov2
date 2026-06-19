import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: string | IconType;
}

// Map of technology titles to their brand-specific colors and hover borders
const techColorMap: Record<string, { iconColor: string; shadowColor: string }> = {
  HTML: { iconColor: "text-orange-500", shadowColor: "group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] group-hover:border-orange-500/30" },
  CSS: { iconColor: "text-blue-500", shadowColor: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-500/30" },
  JS: { iconColor: "text-yellow-400", shadowColor: "group-hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] group-hover:border-yellow-400/30" },
  TypeScript: { iconColor: "text-blue-600", shadowColor: "group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:border-blue-600/30" },
  "Node JS": { iconColor: "text-green-500", shadowColor: "group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:border-green-500/30" },
  React: { iconColor: "text-cyan-400", shadowColor: "group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:border-cyan-400/30" },
  "Next.js": { iconColor: "text-white", shadowColor: "group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:border-white/30" },
  Docker: { iconColor: "text-sky-400", shadowColor: "group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:border-sky-400/30" },
  PostgreSQL: { iconColor: "text-sky-600", shadowColor: "group-hover:shadow-[0_0_15px_rgba(2,132,199,0.2)] group-hover:border-sky-600/30" },
  Git: { iconColor: "text-red-500", shadowColor: "group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] group-hover:border-red-500/30" },
  Python: { iconColor: "text-yellow-500", shadowColor: "group-hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] group-hover:border-yellow-500/30" },
};

export const Stack = ({ title, icon: Icon }: StackProps): JSX.Element => {
  const isString = typeof Icon === "string";
  const techMeta = techColorMap[title] || { iconColor: "text-neutral-400", shadowColor: "group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:border-white/20" };

  return (
    <div
      className={`group flex flex-col items-center justify-center p-6 rounded-xl glass-card text-center hover:scale-105 transition-all duration-300 ${techMeta.shadowColor}`}
    >
      <div className={`mb-4 transition-transform duration-300 group-hover:scale-110 ${techMeta.iconColor}`}>
        {isString ? (
          <img src={Icon} alt={title} title={title} className="h-14 w-14 object-contain" />
        ) : (
          <Icon className="h-14 w-14" />
        )}
      </div>
      <span className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
        {title}
      </span>
    </div>
  );
};
