import profileImage from '../assets/Untitled.png';

const Header = () => {
    return (
        <div className="w-screen min-h-10 p-5">
            {/* Wrapper to centralize and set max width */}
            <div className="max-w-lg mx-auto">
                {/* Intro Message */}
                <div className="bg-gray-800 py-3 px-10 rounded-md mb-12">
                    <p className="text-white font-nunito font-bold text-center">
                        Hello, I'm a full-stack developer based in New Zealand!
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
                    <div className="flex flex-col md:ml-5">
                        <p className=" text-white text-4xl p-1 font-bold rounded-md">
                            Vitor Ames
                        </p>
                        <p className="text-white text-l md:ml-[5px]">
                            Pixel Physicist (Developer / Artist / Technologist)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
