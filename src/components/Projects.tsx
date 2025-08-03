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
                src="https://private-user-images.githubusercontent.com/82846956/419250354-5980f207-889b-4f1a-a902-20a7d4a53c7c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQyMTE5NjYsIm5iZiI6MTc1NDIxMTY2NiwicGF0aCI6Ii84Mjg0Njk1Ni80MTkyNTAzNTQtNTk4MGYyMDctODg5Yi00ZjFhLWE5MDItMjBhN2Q0YTUzYzdjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODAzVDA5MDEwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjZjRkZjRiOWIzYTBkMDY4ZmE1ODVmNmE5N2FkZjkxN2VlYjI5NjJiYWQzZTMzYWE4NmVjZTU1NjljYjkwOWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.suL3qmvO2nlnnxdHR6UILeAXZnKogobtLLxYMK6_lcM"/>
                <div className="font-bold flex items-center gap-2 mt-[15px] mb-3">
                    <p className="font-[20px] whitespace-nowrap">NONOGRAM 404</p>
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                </div>
                <span className="text-justify">This project is a web-based implementation of the Nonogram puzzle game. Players can solve 5x5 Nonogram puzzles, compete with friends, and track their performance through various features. The app is designed to be engaging, competitive, and secure.</span>
            </div>
        </div>
    );
};

export default Projects;