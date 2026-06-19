import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { FolderGit2, Star } from "lucide-react";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
}

// Maps languages to colors
const languageColorMap: Record<string, string> = {
  JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  HTML: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  CSS: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Python: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Go: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Rust: "bg-red-500/10 text-red-400 border-red-500/20",
};

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
        );
        const json = await response.json();
        // GitHub API can sometimes return an error object instead of array if rate-limited
        if (Array.isArray(json)) {
          // Filter out the portfolio itself if desired, or keep all
          setRepositories(json.slice(0, 8)); // Get first 8 repos for a clean layout
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="col-span-full py-12 flex justify-center items-center">
        <div className="w-8 h-8 rounded-full border-2 border-neon-green/30 border-t-neon-green animate-spin" />
      </div>
    );
  }

  if (!repositories || repositories.length === 0) {
    return (
      <div className="col-span-full py-12 text-center text-neutral-500 border border-dashed border-white/10 rounded-xl">
        <FolderGit2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p className="text-sm font-medium">No repositories found or API rate limit exceeded.</p>
      </div>
    );
  }

  return (
    <>
      {repositories.map((repository) => {
        const langColor = languageColorMap[repository.language] || "bg-neutral-500/10 text-neutral-300 border-neutral-500/20";
        return (
          <div
            key={repository.id}
            className="group flex flex-col justify-between p-6 rounded-xl glass-card relative overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all duration-300"
          >
            {/* Top info */}
            <div>
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-lg font-bold text-neutral-100 group-hover:text-neon-green transition-colors break-all">
                  {repository.name}
                </h3>
                
                <div className="flex items-center gap-3">
                  {repository.stargazers_count > 0 && (
                    <div className="flex items-center gap-1 text-xs text-yellow-500/80">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{repository.stargazers_count}</span>
                    </div>
                  )}
                  {repository.language && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${langColor}`}>
                      {repository.language}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-2">
                {repository.description || "Primary language not identified, description not provided."}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={repository.html_url}
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                <FaGithub className="w-4 h-4" /> Github Code
              </a>
              {repository.homepage && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={repository.homepage.startsWith("http") ? repository.homepage : `https://${repository.homepage}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neon-green hover:underline hover:text-neon-green/80 transition-colors"
                >
                  <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
                </a>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
