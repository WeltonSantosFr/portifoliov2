import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { MessageSquare, Mail, Link2 } from "lucide-react";

export const Contacts = () => {
  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`;

  return (
    <div className="py-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let's talk and{" "}
          <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent">
            develop solutions
          </span>{" "}
          together!
        </h2>
        <p className="text-sm text-neutral-400">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>

      {/* Grid of contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* WhatsApp Card */}
        <div className="group p-6 rounded-2xl glass-card border border-white/5 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Active
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-neutral-100 mb-2">My WhatsApp</h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              I'm available for a voice or text chat. Let's talk about creativity and project requirements together.
            </p>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={whatsappUrl}
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors w-fit group/btn"
          >
            Talk Now <MessageSquare className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Email Card */}
        <div className="group p-6 rounded-2xl glass-card border border-white/5 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-500/10 text-red-400 border border-red-500/20">
                <FaEnvelopeOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Replies in 24h
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-neutral-100 mb-2">My Email</h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              Send me an email reporting feedbacks, suggestions, or potential collaboration proposals.
            </p>
          </div>

          <a
            href={`mailto:${userData.emailUser}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors w-fit group/btn"
          >
            Send an Email <Mail className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="group p-6 rounded-2xl glass-card border border-white/5 hover:border-sky-500/30 hover:shadow-[0_0_20px_rgba(14,118,168,0.15)] hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <FaLinkedin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-sky-400 bg-sky-500/5 border border-sky-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Networking
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-neutral-100 mb-2">My LinkedIn</h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              We can build a constant interaction, share technical knowledge, and expand our professional network.
            </p>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={linkedInUrl}
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors w-fit group/btn"
          >
            Go to LinkedIn <Link2 className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};
