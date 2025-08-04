import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import mwsImage from "../../public/MWS.png";
import mwsGame from "../../public/mws-game-image.png"

const MWS: React.FC = () => {
  return (
    <div className="w-screen min-h-screen p-[15px] bg-gray-900 text-white font-nunito">
      {/* Match homepage width */}
      <div className="md:max-w-lg max-w-6xl mx-auto space-y-8">
        
        {/* Title, Year, and Line */}
        <div>
            <div className="flex items-center gap-3 mb-0">
                <h1 className="text-2xl font-bold mb-0">Minimum Wage Spreader</h1>
                <span className="px-3 py-1 bg-gray-700 rounded text-sm font-medium">
                2024
                </span>
            </div>
        </div>

        {/* Description */}
        <p className="leading-relaxed text-justify">
            Created for the Pirate Software Game Jam in January 2024, with the theme "Spread", 
            this puzzle game challenges players to replicate unique spreading patterns requested by customers. 
            Each level presents a new combination to figure out, testing both your logic and pattern-recognition skills. 
            Developed in Godot using GDScript, the game blends simple controls with increasingly tricky puzzles, 
            offering a relaxing yet engaging experience that rewards creative thinking and precision.
        </p>

        {/* Info List */}
        <div className="space-y-4">
          <InfoLabel label="WEBSITE" value="https://paginnini.itch.io/minimum-wage-spreader" link="https://paginnini.itch.io/minimum-wage-spreader" />
          <InfoLabel label="PLATFORM" value="itch.io / WEB" />
          <InfoLabel label="STACK" value="GDSscript, Godot, Aseprite" />
          <InfoLabel label="GITHUB" value="View Repository" link="https://github.com/vitorames404/Minimum-Wage-Spreader" />
        </div>

        {/* Itch.io Banner */}
       <iframe src="https://itch.io/embed/2492386?border_width=0&amp;bg_color=111827&amp;fg_color=feffff&amp;link_color=4fd1c5&amp;border_color=111827" width="550" height="165"><a href="https://paginnini.itch.io/minimum-wage-spreader">Minimum Wage Spreader by paginnini, yipnear</a></iframe>
        
        {/* Screenshot */}
        <div className="rounded-xl overflow-hidden shadow-lg max-h-[315px]">
          <img
            src={mwsImage}
            alt="Nonogram Screenshot"
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={mwsGame} alt="Nonogram Login" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

type InfoLabelProps = {
  label: string;
  value: string;
  link?: string;
};

const InfoLabel: React.FC<InfoLabelProps> = ({ label, value, link }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-lime-300 bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded">
        {label}
      </span>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-teal-400"
        >
          {value} <FaExternalLinkAlt className="text-xs" />
        </a>
      ) : (
        <span className="">{value}</span>
      )}
    </div>
  );
};

export default MWS;
