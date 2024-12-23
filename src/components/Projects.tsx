const Projects = () => {
    return (
        <div className="w-screen min-h-10 p-[15px]">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl mx-auto text-white">
                <div>
                    <p className="text-2xl my-[10px] text-[20px] font-bold">My Projects</p>
                </div>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600" />
                <div className="text-justify text-[16px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida ultricies justo, vitae commodo ante accumsan ut. Sed tempus, leo ac mattis scelerisque, sem mauris facilisis diam, non ullamcorper arcu magna in neque. Proin sem elit, molestie eget lacus non, tincidunt bibendum justo.</p>
                </div>
            </div>
            <div className="w-full mt-[20px] flex justify-center items-center">
                <button className="bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">
                    Check out my projects !
                </button>
            </div>
        </div>
    );
};

export default Projects;
