import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export const Footer = (): JSX.Element => {
  return (
    <footer id="social-media" className="py-16 bg-neutral-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={`https://github.com/${userData.githubUser}.png`}
              alt={userData.nameUser}
              title={userData.nameUser}
              className="w-16 h-16 rounded-full border-2 border-white/10 object-cover"
            />
            <div>
              <h4 className="text-xl font-bold text-neutral-100">
                Thank you for visiting! 👋
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                Follow me on my social networks and let's build something together.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {userData.instagramUser && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${userData.instagramUser}`}
                className="flex items-center justify-center w-12 h-12 rounded-full glass border border-white/5 text-neutral-400 hover:text-[#CF50AC] hover:border-[#CF50AC]/30 hover:scale-110 hover:shadow-[0_0_15px_rgba(207,80,172,0.15)] transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            )}
            {userData.facebookUser && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://fb.com/${userData.facebookUser}`}
                className="flex items-center justify-center w-12 h-12 rounded-full glass border border-white/5 text-neutral-400 hover:text-[#506CCF] hover:border-[#506CCF]/30 hover:scale-110 hover:shadow-[0_0_15px_rgba(80,108,207,0.15)] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
            )}
            {userData.linkedinUser && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://linkedin.com/in/${userData.linkedinUser}`}
                className="flex items-center justify-center w-12 h-12 rounded-full glass border border-white/5 text-neutral-400 hover:text-[#0E76A8] hover:border-[#0E76A8]/30 hover:scale-110 hover:shadow-[0_0_15px_rgba(14,118,168,0.15)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {userData.nameUser}. Built with React, Tailwind CSS and a heavy metal core. 🤘</p>
        </div>
      </div>
    </footer>
  );
};
