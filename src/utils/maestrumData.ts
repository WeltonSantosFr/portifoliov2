import lpDesktop from "@/public/static/img/maestrum/LP.png";
import lpMobile from "@/public/static/img/maestrum/LP_MOB.png";
import registerDesktop from "@/public/static/img/maestrum/register.png";
import registerMobile from "@/public/static/img/maestrum/register_mob.png";
import loginDesktop from "@/public/static/img/maestrum/login.png";
import loginMobile from "@/public/static/img/maestrum/login_mob.png";
import exercisesDesktop from "@/public/static/img/maestrum/exercises.png";
import exercisesMobile from "@/public/static/img/maestrum/exercises_mob.png";
import exercisesOpenDesktop from "@/public/static/img/maestrum/exercises_open.png";
import exercisesOpenMobile from "@/public/static/img/maestrum/exercises_open_mob.png";
import routinesDesktop from "@/public/static/img/maestrum/routines.png";
import routinesMobile from "@/public/static/img/maestrum/routines_mob.png";
import routinesOpenDesktop from "@/public/static/img/maestrum/routines_open.png";
import routinesOpenMobile from "@/public/static/img/maestrum/routines_open_mob.png";
import routinesRunDesktop from "@/public/static/img/maestrum/routines_run.png";
import routinesRunMobile from "@/public/static/img/maestrum/routines_run_mob.png";
import scalesDesktop from "@/public/static/img/maestrum/scales.png";
import scalesMob1 from "@/public/static/img/maestrum/scales_mob1.png";
import scalesMob2 from "@/public/static/img/maestrum/scales_mob2.png";
import harmonicFieldsDesktop from "@/public/static/img/maestrum/harmonic_fields.png";
import harmonicFieldsMob1 from "@/public/static/img/maestrum/harmonic_fields_mob1.png";
import harmonicFieldsMob2 from "@/public/static/img/maestrum/harmonic_fields_mob2.png";
import chordsDesktop from "@/public/static/img/maestrum/chords.png";
import chordsMob1 from "@/public/static/img/maestrum/chords_mob1.png";
import chordsMob2 from "@/public/static/img/maestrum/chords_mob2.png";
import progressDesktop from "@/public/static/img/maestrum/progress.png";
import progressMob1 from "@/public/static/img/maestrum/progress_mob1.png";
import progressMob2 from "@/public/static/img/maestrum/progress_mob2.png";

export interface MaestrumScreenshot {
  id: string;
  name: string;
  url: string;
  caption: string;
}

export const maestrumDesktopScreenshots: MaestrumScreenshot[] = [
  {
    id: "lp",
    name: "Landing Page",
    url: lpDesktop,
    caption: "Maestrum main landing page showcasing the value proposition, interactive demo, and feature overview."
  },
  {
    id: "register",
    name: "Registration Page",
    url: registerDesktop,
    caption: "Account creation page featuring plan selection (Base & Pro) and social sign-in options."
  },
  {
    id: "login",
    name: "Login Page",
    url: loginDesktop,
    caption: "Authentication screen featuring email/password credentials, Google OAuth integration, and account access."
  },
  {
    id: "exercises",
    name: "Exercises Dashboard",
    url: exercisesDesktop,
    caption: "Interactive practice routine and exercise tracker with real-time metronome BPM and timer control."
  },
  {
    id: "exercises_open",
    name: "Exercise Details & Timer",
    url: exercisesOpenDesktop,
    caption: "Expanded exercise view with practice instructions, video/PDF tabs, BPM goal tracking, and session timer."
  },
  {
    id: "routines",
    name: "Routines Overview",
    url: routinesDesktop,
    caption: "Structured practice routines with total duration estimates and configurable rest intervals between sets."
  },
  {
    id: "routines_open",
    name: "Routine Breakdown",
    url: routinesOpenDesktop,
    caption: "Expanded routine details showing chained exercises, target speeds, edit options, and one-click start."
  },
  {
    id: "routines_run",
    name: "Routine Focus Mode",
    url: routinesRunDesktop,
    caption: "Distraction-free active focus mode with BPM speed adjusters, countdown timer, and queued exercise flow."
  },
  {
    id: "scales",
    name: "Scales & Greek Modes",
    url: scalesDesktop,
    caption: "Comprehensive fretboard visualizer for root notes, Greek modes, exotic scales, and custom string tunings."
  },
  {
    id: "harmonic_fields",
    name: "Harmonic Fields",
    url: harmonicFieldsDesktop,
    caption: "Harmonic field generator displaying chords in key, harmonic functions, extensions, and reharmonization."
  },
  {
    id: "chords",
    name: "Chord Dictionary",
    url: chordsDesktop,
    caption: "Interactive chord dictionary with CAGED shape diagrams, finger placements, and audio playback."
  },
  {
    id: "progress",
    name: "Progress & Metrics",
    url: progressDesktop,
    caption: "Comprehensive practice analytics with current streak, total practice minutes, and BPM evolution charts."
  }
];

export const maestrumMobileScreenshots: MaestrumScreenshot[] = [
  {
    id: "lp_mob",
    name: "Landing Page (Mobile)",
    url: lpMobile,
    caption: "Mobile landing page layout optimized with intuitive touch controls and responsive design."
  },
  {
    id: "register_mob",
    name: "Registration Page (Mobile)",
    url: registerMobile,
    caption: "Mobile account creation and plan selector interface streamlined for handheld devices."
  },
  {
    id: "login_mob",
    name: "Login Page (Mobile)",
    url: loginMobile,
    caption: "Mobile login view with clean inputs and swift single-tap Google OAuth authentication."
  },
  {
    id: "exercises_mob",
    name: "Exercises Dashboard (Mobile)",
    url: exercisesMobile,
    caption: "Mobile exercise list view designed for quick access on guitar stands and portable devices during practice."
  },
  {
    id: "exercises_open_mob",
    name: "Exercise Details (Mobile)",
    url: exercisesOpenMobile,
    caption: "Mobile expanded exercise card with instructions, goal BPM, and dedicated timer."
  },
  {
    id: "routines_mob",
    name: "Routines Overview (Mobile)",
    url: routinesMobile,
    caption: "Mobile view of created routines displaying total practice duration and rest time badges."
  },
  {
    id: "routines_open_mob",
    name: "Routine Breakdown (Mobile)",
    url: routinesOpenMobile,
    caption: "Mobile expanded routine view listing exercises in sequence with quick action triggers."
  },
  {
    id: "routines_run_mob",
    name: "Routine Focus Mode (Mobile)",
    url: routinesRunMobile,
    caption: "Mobile active routine player with live countdown, quick BPM increments, and next exercise indicator."
  },
  {
    id: "scales_mob1",
    name: "Scales: Mode Selectors (Mobile)",
    url: scalesMob1,
    caption: "Mobile root note selectors, Greek modes, and exotic scale buttons adapted for touch navigation."
  },
  {
    id: "scales_mob2",
    name: "Scales: Fretboard View (Mobile)",
    url: scalesMob2,
    caption: "Mobile interactive fretboard diagram highlighting root notes, characteristic degrees, and string tunings."
  },
  {
    id: "harmonic_fields_mob1",
    name: "Harmonic Fields: Settings (Mobile)",
    url: harmonicFieldsMob1,
    caption: "Mobile controls for key root, scale type, chord extensions (triads/tetrads/tensions), and reharmonization."
  },
  {
    id: "harmonic_fields_mob2",
    name: "Harmonic Fields: Chords (Mobile)",
    url: harmonicFieldsMob2,
    caption: "Mobile chord cards displaying Roman numeral degrees, functional roles (Tonic, Supertonic), and notes."
  },
  {
    id: "chords_mob1",
    name: "Chord Dictionary: Selectors (Mobile)",
    url: chordsMob1,
    caption: "Mobile selectors for chord root, triad/tetrad categories, inversions, and chord types."
  },
  {
    id: "chords_mob2",
    name: "Chord Dictionary: Shapes (Mobile)",
    url: chordsMob2,
    caption: "Mobile chord diagrams with fret numbers, finger placements, and audio playback buttons for CAGED shapes."
  },
  {
    id: "progress_mob1",
    name: "Progress: Key Metrics (Mobile)",
    url: progressMob1,
    caption: "Mobile KPI cards tracking practice streaks, total minutes, completed sessions, and weekly charts."
  },
  {
    id: "progress_mob2",
    name: "Progress: BPM Evolution (Mobile)",
    url: progressMob2,
    caption: "Mobile performance graphs highlighting speed progression per exercise and top 5 comparison curves."
  }
];
