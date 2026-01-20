import nonogramImage from "../../public/nonogram_image.png";
import mwsImage from "../../public/MWS.png";
import appSImage from "../../public/appsketch.png";

type ProjectsProps = {
  setCurrentPage: (page: string) => void;
};

// Reusable image shell (now clickable)
const ImgBox: React.FC<{
  src: string;
  alt: string;
  objectPosition?: string;
  onClick?: () => void;
}> = ({ src, alt, objectPosition = "object-top", onClick }) => (
  <div
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : -1}
    onClick={onClick}
    onKeyDown={(e) => {
      if (!onClick) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    }}
    className={`relative w-full max-w-[480px] mx-auto aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl ${
      onClick ? "cursor-pointer focus:outline-none focus:ring-1 focus:ring-teal-700 " : ""
    }`}
  >
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 h-full w-full object-cover ${objectPosition}`}
    />
  </div>
);

const Projects: React.FC<ProjectsProps> = ({ setCurrentPage }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* ---- Card 1 ---- */}
        <article className="space-y-4 group hover:transform hover:scale-[1.02] transition-all duration-300">
          <div className="relative">
            <ImgBox
              src={nonogramImage}
              alt="Nonogram 404"
              onClick={() => setCurrentPage("nonogram")}
            />
            <div className="absolute top-3 right-3 bg-primary-400 bg-opacity-90 px-3 py-1 rounded-full text-xs font-bold">
              WEB APP
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors cursor-pointer" onClick={() => setCurrentPage("nonogram")}>
              NONOGRAM 404
            </h3>
            <svg className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-base leading-relaxed text-text-secondary">
            A competitive web app where players solve 5×5 Nonogram puzzles, track their stats, and challenge friends.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400 font-semibold">MERN Stack</span>
          </div>
        </article>

        {/* ---- Card 2 ---- */}
        <article className="space-y-4 group hover:transform hover:scale-[1.02] transition-all duration-300">
          <div className="relative">
            <ImgBox
              src={mwsImage}
              alt="Minimum Wage Spreader"
              objectPosition="object-center"
              onClick={() => setCurrentPage("mws")}
            />
            <div className="absolute top-3 right-3 bg-primary-400 bg-opacity-90 px-3 py-1 rounded-full text-xs font-bold">
              GAME
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors cursor-pointer" onClick={() => setCurrentPage("mws")}>
              MINIMUM WAGE SPREADER
            </h3>
            <svg className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-base leading-relaxed text-text-secondary">
            A puzzle game about matching toast-spreading patterns, built for the Pirate Software Game Jam.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">Godot</span>
            <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">GDScript</span>
          </div>
        </article>

        {/* ---- Card 3 ---- */}
        <article className="space-y-4 group hover:transform hover:scale-[1.02] transition-all duration-300">
          <div className="relative">
            <ImgBox
              src={appSImage}
              alt="appSketch"
              objectPosition="object-center"
              onClick={() => setCurrentPage("appsketch")}
            />
            <div className="absolute top-3 right-3 bg-primary-400 bg-opacity-90 px-3 py-1 rounded-full text-xs font-bold">
              AI TOOL
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors cursor-pointer" onClick={() => setCurrentPage("appsketch")}>
              APP SKETCH
            </h3>
            <svg className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-base leading-relaxed text-text-secondary">
            An AI-powered app that transforms user text inputs into structured UI prototypes and forms.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400 font-semibold">MERN Stack</span>
            <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">OpenRouter</span>
          </div>
        </article>
 
      </div>
    </section>
  );
};

export default Projects;
