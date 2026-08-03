import { useState } from "react";
import { userData } from "@/utils/userData";
import { stackData } from "@/utils/stackData";
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";
import { 
  FaGithub, 
  FaLinkedin, 
  FaMusic, 
  FaPlay, 
  FaPause, 
  FaChevronRight, 
  FaChevronLeft, 
  FaCompactDisc,
  FaReact,
  FaDocker,
  FaNode
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiStripe } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Sparkles, Code, ExternalLink, Flame, Shield, Compass, Swords } from "lucide-react";
import maestrumLogo from "@/public/static/img/logo/maestrum.png";
import maestrumSlide1 from "@/public/static/img/maestrum/slide1.png";
import maestrumSlide2 from "@/public/static/img/maestrum/slide2.png";
import maestrumSlide3 from "@/public/static/img/maestrum/slide3.png";
import maestrumSlide4 from "@/public/static/img/maestrum/slide4.png";

// Metal band dataset for the interactive player
const metalBands = [
  {
    name: "Gojira",
    song: "The Art of Dying",
    album: "The Way of All Flesh",
    color: "from-emerald-600 to-teal-900 border-emerald-500/40",
    neonGlow: "shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    bgAccent: "bg-emerald-500/10",
    textColor: "text-emerald-400",
    lyrics: "I want all this dust to get back in the wind, to the space where I can breathe again. Hold on to what you are.",
    theme: "Technical Death / Progressive Metal with ecological and spiritual themes."
  },
  {
    name: "Meshuggah",
    song: "Bleed",
    album: "obZen",
    color: "from-neutral-700 to-neutral-950 border-neutral-600/40",
    neonGlow: "shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    bgAccent: "bg-neutral-500/10",
    textColor: "text-neutral-300",
    lyrics: "First constriction. Squeezing out the oxygen... A path of needles, rendering me clean.",
    theme: "Extreme Progressive Metal, pioneer of the djent sound with complex polyrhythms."
  },
  {
    name: "Children of Bodom",
    song: "In Your Face",
    album: "Are You Dead Yet?",
    color: "from-red-800 to-rose-950 border-red-500/40",
    neonGlow: "shadow-[0_0_20px_rgba(239,68,68,0.25)]",
    bgAccent: "bg-red-500/10",
    textColor: "text-red-400",
    lyrics: "Say one, more word, I double dare you (bring it on) It's my world, you're in it, it'll take you down in a minute",
    theme: "Melodic Death / Power Metal with hyper-fast neoclassical guitar and keyboard duels."
  },
  {
    name: "Death",
    song: "Spiritual Healing",
    album: "Spiritual Healing",
    color: "from-purple-800 to-indigo-950 border-purple-500/40",
    neonGlow: "shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    bgAccent: "bg-purple-500/10",
    textColor: "text-purple-400",
    lyrics: "Always locking the doors to your mind Escaping the reality that surrounds you",
    theme: "The pioneers of Technical Death Metal, combining complex philosophy and philosophy of life."
  },
  {
    name: "Carcass",
    song: "Keep on Rotting in the Free World",
    album: "Swansong",
    color: "from-amber-850 to-amber-950 border-amber-500/40",
    neonGlow: "shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    bgAccent: "bg-amber-500/10",
    textColor: "text-amber-400",
    lyrics: "Keep on rotting, keep on hoping, keep on dreaming...",
    theme: "Pioneers of Melodic Death Metal / Grindcore with satirical and medical themes."
  }
];

// Anime dataset
const animeList = [
  {
    title: "Naruto",
    character: "Shikamaru Nara",
    ability: "Shadow Possession Jutsu / Tactical Genius",
    themeColor: "group-hover:border-orange-500/40 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    icon: Flame,
    quote: "Sometimes I wish I was just a cloud, floating along...",
    bgClass: "from-orange-950/40 to-black"
  },
  {
    title: "Bleach",
    character: "Ichigo Kurosaki",
    ability: "Bankai (Tensa Zangetsu) / Hollowfication",
    themeColor: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: Swords,
    quote: "If you want to protect your friends, you have to get stronger.",
    bgClass: "from-purple-950/40 to-black"
  },
  {
    title: "Hunter x Hunter",
    character: "Gon Freecss / Killua Zoldyck",
    ability: "Jajanken / Godspeed Nen",
    themeColor: "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: Compass,
    quote: "You should enjoy the little detours to the utmost.",
    bgClass: "from-emerald-950/40 to-black"
  },
  {
    title: "One Piece",
    character: "Roronoa Zoro",
    ability: "Three Sword Style (Santoryu) / Advanced Haki",
    themeColor: "group-hover:border-sky-500/40 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    icon: Shield,
    quote: "If I die here, then that's all the man I was destined to be.",
    bgClass: "from-sky-950/40 to-black"
  }
];

// Maestrum App screenshot carousel placeholders. 
// Replace these URLs with your actual screenshots (e.g. "/src/public/static/img/maestrum/dashboard.png")
const maestrumScreenshots = [
  {
    url: maestrumSlide1,
    caption: "Interactive exercise list to track physical and technical string routines (picking, arpeggios, legato)."
  },
  {
    url: maestrumSlide2,
    caption: "Practice routines showing specific times and exercises to optimize daily warm-ups."
  },
  {
    url: maestrumSlide3,
    caption: "Interactive scales and Greek modes visualizer for self-taught fretboard study."
  },
  {
    url: maestrumSlide4,
    caption: "Harmonic field and chord shapes dictionary to master chords in any key."
  }
];

// Tech stack specific to Maestrum
const maestrumStack = [
  { name: "React", icon: FaReact, color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/30" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400 border-blue-400/20 bg-blue-400/5 hover:bg-blue-400/10 hover:border-blue-400/30" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400 border-sky-400/20 bg-sky-400/5 hover:bg-sky-400/10 hover:border-sky-400/30" },
  { name: "Node.js", icon: FaNode, color: "text-green-500 border-green-500/20 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/30" },
  { name: "Next.js", icon: TbBrandNextjs, color: "text-white border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500 border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 hover:border-sky-500/30" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500 border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/30" },
  { name: "Stripe", icon: SiStripe, color: "text-indigo-400 border-indigo-400/20 bg-indigo-400/5 hover:bg-indigo-400/10 hover:border-indigo-400/30" }
];

export const Home = (): JSX.Element => {
  const githubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portifoliov2`;

  // Metal Player State
  const [bandIndex, setBandIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeBand = metalBands[bandIndex];

  const nextBand = () => {
    setBandIndex((prev) => (prev + 1) % metalBands.length);
  };

  const prevBand = () => {
    setBandIndex((prev) => (prev - 1 + metalBands.length) % metalBands.length);
  };

  // Maestrum Carousel State
  const [maestrumIndex, setMaestrumIndex] = useState(0);

  const nextMaestrumSlide = () => {
    setMaestrumIndex((prev) => (prev + 1) % maestrumScreenshots.length);
  };

  const prevMaestrumSlide = () => {
    setMaestrumIndex((prev) => (prev - 1 + maestrumScreenshots.length) % maestrumScreenshots.length);
  };

  return (
    <main id="home" className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">
                <Sparkles className="w-3.5 h-3.5 text-neon-green animate-pulse" />
                <span>Full Stack Developer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Hello, my name is{" "}
                <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent">
                  {userData.nameUser}
                </span>
              </h1>

              <p className="text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0">
                I love creating and developing premium web interfaces, mixing code with heavy metal energy and creative anime inspiration. Discover my technical stack and side projects below!
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg font-semibold bg-white text-black hover:bg-neutral-200 transition-colors shadow-lg hover:shadow-white/10"
                >
                  See Projects
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={portfolioUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-white/10 hover:bg-white/5 transition-colors"
                >
                  <Code className="w-4 h-4" />
                  Source Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={githubUrl}
                  className="p-3 rounded-lg border border-white/10 hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Profile Avatar with Neon Ring */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
              <img
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full border-4 border-black object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* The Personal Universe Section (Metal & Anime) */}
      <section className="py-20 border-t border-white/5 bg-neutral-950/40 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My Personal Universe 🌌
            </h2>
            <p className="mt-4 text-neutral-400">
              When I'm not coding, you'll find me listening to complex technical riffs or diving deep into Japanese anime. Here are some of my ultimate favorites:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* COLUMN 1: Metal Zone Interactive Player */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <FaMusic className="w-5 h-5 text-neon-green" />
                <h3 className="text-xl font-bold text-neutral-100">Metal Zone</h3>
              </div>

              {/* Music Player Mockup */}
              <div className={`glass border rounded-2xl p-6 transition-all duration-500 bg-gradient-to-br ${activeBand.color} ${activeBand.neonGlow}`}>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Now Playing (Simulated)
                  </span>
                  
                  {/* Bouncing Audio Bars */}
                  {isPlaying ? (
                    <div className="flex items-end gap-1 h-6">
                      <span className="sound-bar" style={{ animationDelay: "0.1s" }} />
                      <span className="sound-bar" style={{ animationDelay: "0.4s" }} />
                      <span className="sound-bar" style={{ animationDelay: "0.2s" }} />
                      <span className="sound-bar" style={{ animationDelay: "0.5s" }} />
                    </div>
                  ) : (
                    <div className="flex items-end gap-1 h-6">
                      <span className="w-[3px] h-[3px] bg-white/30 rounded-full" />
                      <span className="w-[3px] h-[3px] bg-white/30 rounded-full" />
                      <span className="w-[3px] h-[3px] bg-white/30 rounded-full" />
                    </div>
                  )}
                </div>

                {/* Disc & Track info */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative flex-shrink-0">
                    <FaCompactDisc className={`w-16 h-16 text-white/90 ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "8s" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-black border border-white/20" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-wide">{activeBand.song}</h4>
                    <p className="text-sm text-white/80">{activeBand.name}</p>
                    <p className="text-xs text-white/60 italic">{activeBand.album}</p>
                  </div>
                </div>

                {/* Lyrics / Description Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-white/80 space-y-2 mb-8 min-h-[100px] flex flex-col justify-center">
                  <p className="italic font-medium">"{activeBand.lyrics}"</p>
                  <p className="text-white/40 text-[10px] mt-1 pt-1 border-t border-white/5">
                    {activeBand.theme}
                  </p>
                </div>

                {/* Player Controls */}
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={prevBand}
                    className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                    aria-label="Previous band"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-4 rounded-full bg-white text-black hover:bg-neutral-200 transition-all transform hover:scale-105 active:scale-95"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    onClick={nextBand}
                    className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                    aria-label="Next band"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Anime Sanctuary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Swords className="w-5 h-5 text-neon-purple" />
                <h3 className="text-xl font-bold text-neutral-100">Anime Sanctuary</h3>
              </div>

              {/* Grid of anime cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {animeList.map((anime) => {
                  const AnimeIcon = anime.icon;
                  return (
                    <div
                      key={anime.title}
                      className={`group relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b ${anime.bgClass} p-5 hover:scale-[1.02] transition-all duration-300 ${anime.themeColor}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-colors">
                          {anime.title}
                        </span>
                        <div className={`p-2 rounded-lg border ${anime.badgeColor}`}>
                          <AnimeIcon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-1 mb-4 text-xs">
                        <p className="text-neutral-400">
                          <span className="font-semibold text-neutral-300">Fav Character:</span> {anime.character}
                        </p>
                        <p className="text-neutral-400">
                          <span className="font-semibold text-neutral-300">Power:</span> {anime.ability}
                        </p>
                      </div>

                      <p className="text-xs italic text-neutral-300 border-l-2 border-white/10 pl-2">
                        "{anime.quote}"
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technologies & Stack Section */}
      <section id="stack" className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technologies & Stack 💻
            </h2>
            <p className="mt-4 text-neutral-400">
              The tools and tech stack I use to craft interactive, highly functional digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </div>
        </div>
      </section>

      {/* Maestrum SaaS Section */}
      <section id="maestrum" className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950/20 to-neutral-950/60 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header: Icon & Big Name Featured */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="relative group mb-6">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-neon-blue via-[#0055ff] to-neon-purple opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
              <img
                src={maestrumLogo}
                alt="Maestrum Logo"
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-white/10 bg-neutral-950 p-1 object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-neutral-100 to-neon-blue bg-clip-text text-transparent">
                Maestrum
              </span>
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-neon-blue font-semibold mb-6">
              Personal SaaS Project
            </p>

            {/* Maestrum Project Stack Icons */}
            <div className="flex flex-wrap justify-center gap-2 max-w-lg">
              {maestrumStack.map((tech, index) => {
                const TechIcon = tech.icon;
                return (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-300 hover:scale-105 cursor-default ${tech.color}`}
                  >
                    <TechIcon className="w-3.5 h-3.5" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Screenshot Carousel */}
          <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-neutral-950/80 shadow-[0_0_30px_rgba(0,229,255,0.05)] mb-12">
            {/* Image Slider */}
            <div className="relative aspect-video w-full h-[250px] sm:h-[400px] overflow-hidden">
              {maestrumScreenshots.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === maestrumIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay & Caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-16 text-left">
                    <p className="text-xs sm:text-sm text-neutral-300 font-medium">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevMaestrumSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous screenshot"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextMaestrumSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next screenshot"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {maestrumScreenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setMaestrumIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === maestrumIndex
                      ? "w-6 bg-neon-blue shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Description & Call To Action */}
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Maestrum is a SaaS (Software as a Service) platform developed specifically to support and structure the daily practice of guitarists and string musicians.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              The project was born with the purpose of fulfilling a basic need: an interactive to-do list focused on daily practice routines (like picking control, legato, arpeggios, etc.). However, Maestrum evolved to become a complete musical learning ecosystem. Today, besides managing physical and technical practice, the platform serves as an interactive theoretical guide, assisting in self-taught study through scales, harmonic field, and chords visualizers.
            </p>

            <div className="pt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maestrum.app.br"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Visit Maestrum</span>
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-white/5 bg-neutral-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                My Projects 📁
              </h2>
              <p className="mt-2 text-neutral-400">
                A selection of side projects loaded dynamically from GitHub.
              </p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={githubUrl}
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              See more on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project />
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contact" className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Contacts />
        </div>
      </section>
    </main>
  );
};
