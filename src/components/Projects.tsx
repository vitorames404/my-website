import nonogramImage from "../../public/nonogram_image.png";
import mwsImage from "../../public/MWS.png";

type ProjectsProps = {
  setCurrentPage: (page: string) => void;
};

const Projects: React.FC<ProjectsProps> = ({ setCurrentPage }) => {
    return (
        <div className="max-w-3xl mx-auto text-white font-nunito">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl text=[18px] mx-auto text-white">
                {/* Image that will show the project I'm talking about*/}
                <img 
                className="shadow-2xl rounded-3xl" 
                onClick={() => setCurrentPage("nonogram")}
                src={nonogramImage}
                />
                <div className="font-bold flex items-center gap-2 mt-[15px] mb-3">
                    <p className="font-[20px] whitespace-nowrap">NONOGRAM 404</p>
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                </div>
                <span className="text-justify">This project is a web-based implementation of the Nonogram puzzle game. Players can solve 5x5 Nonogram puzzles, compete with friends, and track their performance through various features. The app is designed to be engaging, competitive, and secure.</span>
                {/* Image that will show the project I'm talking about*/}
                <img 
                className="shadow-2xl object-cover object-top rounded-3xl w-full max-h-[315px] mt-8" 
                onClick={() => setCurrentPage("mws")}
                src={mwsImage}
                />
                <div className="font-bold flex items-center gap-2 mt-[15px] mb-3">
                    <p className="font-[20px] whitespace-nowrap">MINIMUM WAGE SPREADER</p>
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                </div>
                <span className="text-justify">
                    Game made for the Pirate Software Game Jam in Jan. 2024 with the theme Spread. This is a puzzle game about matching the spreading patterns
                    asked by the customers, developed in godot using GDScript. 
                </span>
            </div>
        </div>
    );
};

export default Projects;