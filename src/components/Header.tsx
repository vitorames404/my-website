import profileImage from '../../public/myphoto.jpg';

const Header = () => {
    return (
        <div className="w-screen min-h-10 p-5">
            {/* Wrapper to centralize and set max width */}
            <div className="max-w-lg mx-auto">
                {/* Intro Message */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 py-4 px-10 rounded-lg mb-12 shadow-lg">
                    <p className="text-white font-semibold text-center text-lg">
                        Full-stack Developer | Based in New Zealand
                    </p>
                </div>

                {/* Name, Title, and Image Section */}
                <div className="flex flex-col md:flex-row items-center text-center justify-center sm:text-start sm:items-start">

                    {/* Profile Image */}
                    <div className="md:ml-0">
                        <img
                            src={profileImage} 
                            alt="Vitor Ames"
                            className="rounded-full border-4 border-white w-24 h-24 object-cover"
                        />
                    </div>

                    {/* Name and Title Section */}
                    <div className="flex flex-col md:ml-6">
                        <p className="text-white text-4xl font-bold mb-1">
                            Vitor Ames
                        </p>
                        <p className="text-accent-400 text-base font-semibold">
                            Full-Stack Developer & Creative Builder
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
