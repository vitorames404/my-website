import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import appSImage from "../../public/appsketch.png";
import genAppS from "../../public/gen-appsketch.png";

const AppSketch: React.FC = () => {
  return (
    <div className="w-screen min-h-screen p-[15px] bg-background-primary text-white">
      {/* Match homepage width */}
      <div className="md:max-w-lg max-w-6xl mx-auto space-y-8">
        
        {/* Title, Year, and Line */}
        <div>
            <div className="flex items-center gap-3 mb-0">
                <h1 className="text-2xl font-bold mb-0">AppSketch</h1>
                <span className="px-3 py-1 bg-background-tertiary rounded text-sm font-medium">
                2025
                </span>
            </div>
        </div>

        {/* Description */}
        <p className="leading-relaxed text-justify text-text-secondary">
          Created as a week personal project at the last trimester of 2025. AppSketch was created with the proposal
          to create an app that used an AI model to generate a mock UI based on an input from the user. The webapp features use
          of localStorage to track the UI's created by the user, the possibility to generate and edit mock UI's through a simple text input and the possibility
          to extract and input UI's through JSON code. 
          The project uses free models from OpenRouter to generate a JSON code that is used to create the UI dynamically in the website.
        </p>

        {/* Info List */}
        <div className="space-y-4">
          <InfoLabel label="WEBSITE" value="https://appsketchai.onrender.com/" link="https://appsketchai.onrender.com/" />
          <InfoLabel label="PLATFORM" value="Web" />
          <InfoLabel label="STACK" value="React.js, Express.js, Node.js, MongoDB, OpenRouter" />
          <InfoLabel label="GITHUB" value="View Repository" link="https://github.com/vitorames404/appSketch-MiniAIBuilder.git" />
        </div>

        {/* Screenshot */}
        <div className="rounded-xl overflow-hidden shadow-lg max-h-[315px]">
          <img
            src={appSImage}
            alt="AppSketch Screenshot"
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={genAppS} alt="Generated UI" className="w-full h-auto" />
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
      <span className="bg-primary-400 text-white text-xs font-bold px-2 py-1 rounded">
        {label}
      </span>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300"
        >
          {value} <FaExternalLinkAlt className="text-xs" />
        </a>
      ) : (
        <span className="text-text-secondary">{value}</span>
      )}
    </div>
  );
};

export default AppSketch;
