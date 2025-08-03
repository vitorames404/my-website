import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import loginImage from "../../public/nonogram_login.png";

const Nonogram: React.FC = () => {
  return (
    <div className="w-screen min-h-screen p-[15px] bg-gray-900 text-white font-nunito">
      {/* Match homepage width */}
      <div className="md:max-w-lg max-w-6xl mx-auto space-y-8">
        
        {/* Title, Year, and Line */}
        <div>
            <div className="flex items-center gap-3 mb-0">
                <h1 className="text-2xl font-bold mb-0">NONOGRAM404</h1>
                <span className="px-3 py-1 bg-gray-700 rounded text-sm font-medium">
                2024
                </span>
            </div>
        </div>

        {/* Description */}
        <p className="leading-relaxed text-justify">
            Nonogram 404 is a web-based puzzle game where players solve 5x5 challenges,
            race for the fastest times, and tackle a new daily puzzle on a global leaderboard.
            With guest play, secure authentication, and performance tracking, it delivers a competitive
            and engaging experience for puzzle enthusiasts.
        </p>

        {/* Info List */}
        <div className="space-y-4">
          <InfoLabel label="WEBSITE" value="https://nonogram404.onrender.com/home" link="https://nonogram404.onrender.com/home" />
          <InfoLabel label="PLATFORM" value="Web" />
          <InfoLabel label="STACK" value="Next.js, React.js, Node.js, Express.js, MongoDB, JWT" />
          <InfoLabel label="GITHUB" value="View Repository" link="https://github.com/vitorames404/nonogram-game" />
        </div>

        {/* Screenshot */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://private-user-images.githubusercontent.com/82846956/419250354-5980f207-889b-4f1a-a902-20a7d4a53c7c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQyMjA3ODQsIm5iZiI6MTc1NDIyMDQ4NCwicGF0aCI6Ii84Mjg0Njk1Ni80MTkyNTAzNTQtNTk4MGYyMDctODg5Yi00ZjFhLWE5MDItMjBhN2Q0YTUzYzdjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODAzVDExMjgwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY3NWEzNTM2MDg2YTIzYmRjOGM5NTczOGVlN2MwMjFlOGZmYzAwNDA2NmNjZWNjOGIxNDY5NTcwMTQyMTk5Y2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.y2UvBLiy0TdPWgzGP1zzRnuluCXVWZvsptfGKOunP7g"
            alt="Nonogram Screenshot"
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={loginImage} alt="Nonogram Login" className="w-full h-auto" />
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

export default Nonogram;
