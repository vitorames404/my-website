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
    <section className="max-w-6xl mx-auto px-4 text-white font-nunito">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* ---- Card 1 ---- */}
        <article className="text-center space-y-3">
          <ImgBox
            src={nonogramImage}
            alt="Nonogram 404"
            onClick={() => setCurrentPage("nonogram")}
          />
          <div className="h-12 flex items-center justify-center">
            <h3 className="text-[20px] font-bold text-center text-balance">
              NONOGRAM 404
            </h3>
          </div>
          <p className="text-[15px] md:text-[16px] leading-7 text-center [hyphens:auto]">
            A competitive web app where players solve 5×5 Nonogram puzzles, track their stats, and challenge friends.
          </p>
        </article>

        {/* ---- Card 2 ---- */}
        <article className="text-center space-y-3">
          <ImgBox
            src={mwsImage}
            alt="Minimum Wage Spreader"
            objectPosition="object-center"
            onClick={() => setCurrentPage("mws")}
          />
          <div className="h-12 flex items-center justify-center">
            <h3 className="text-[20px] font-bold text-center text-balance">
              MINIMUM WAGE SPREADER
            </h3>
          </div>
          <p className="text-[15px] md:text-[16px] leading-7 text-center [hyphens:auto]">
            A puzzle game about matching a toast-spreading patterns made for the Pirate Software Game Jam.
          </p>
        </article>

        {/* ---- Card 3 ---- */}
        <article className="text-center space-y-3">
          <ImgBox
            src={appSImage}
            alt="appSketch"
            objectPosition="object-center"
            onClick={() => setCurrentPage("appsketch")}
          />
          <div className="h-12 flex items-center justify-center">
            <h3 className="text-[20px] font-bold text-center text-balance">
              APP SKETCH
            </h3>
          </div>
          <p className="text-[15px] md:text-[16px] leading-7 text-center [hyphens:auto]">
            An AI-powered app that transforms user text inputs into structured UI prototypes and forms. 
          </p>
        </article>
 
      </div>
    </section>
  );
};

export default Projects;
