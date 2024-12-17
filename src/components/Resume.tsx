import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { AiOutlineBulb } from "react-icons/ai";

const Resume  = () => {

    return (
        <div className="w-screen min-h-10 p-[15px]">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl mx-auto text-white">
                <div>
                    <p className="text-2xl my-[10px] text-[20px] font-bold">Resumé</p>
                </div>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600" />
                <div>
                </div>

                {/* Summary */}
                <div className="flex items-center space-x-2 text-white cursor-pointer">
                    <p className="text-2xl my-[10px] text-[20px] font-bold">Summary</p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                        Highly motivated Computer Science student with strong technical and problem-solving skills.
                    </li>
                    <li>
                        Hands-on experience in C# programming, API development, and database management with SQL and Microsoft SQL
                        Server.
                    </li>
                    <li>
                        Proven customer service expertise through direct client interactions and software issue resolution
                    </li>
                    <li>
                        Experience in tutoring Computer Science students and collaborating in diverse technology environments to deliver 
                        projects on time.
                    </li>
                </ul>

                {/* Experience List */}
                <div className="flex items-center space-x-2 text-white cursor-pointer">
                    <p className="text-2xl my-[10px] text-[20px] font-bold">I.T Experience</p>
                </div>
                <div className="space-y-6">

                        {/* Job 1 */}
                        <div>
                        <h3 className="text-lg text-white font-bold">
                            I.T Support Technician & Trainee Back-end developer | 2021 Nov. - 2022 Nov.
                        </h3>
                        <p className="text-gray-400 italic mb-2">Angellira Satellite Tracking</p>
                        <p className="text-gray-300">
                            Here I&apos;ve mproved teamwork in technology environments through effective team management
                            strategies. Gained experience in API development with C# and Dapper, enhancing web integration,
                            database management, and software development skills. Strengthened customer service by solving
                            software issues and developed hands-on expertise with SQL and Microsoft SQL Server.
                        </p>
                        </div>

                        {/* Job 2 */}
                        <div>
                        <h3 className="text-lg text-white font-bold">
                            Low code developer | 2021 Mar. - 2021 Sep.
                        </h3>
                        <p className="text-gray-400 italic mb-2">Eisenh Software</p>
                        <p className="text-gray-300">
                            I enhanced database organization and refined web development techniques, 
                            primarily using JavaScript. I utilized the low-code platform Bubble.io for web development 
                            and improved teamwork skills by effectively communicating and collaborating within a small 
                            team to successfully deliver a project on time.
                        </p>
                        </div>

                        {/* Job 3 */}
                        <div>
                        <h3 className="text-lg text-white font-bold">
                            Tutor / Lab. Demonstrator | Jan. 2024 - Present
                        </h3>
                        <p className="text-gray-400 italic mb-2">
                            University of Waikato | Hamilton, New Zealand
                        </p>
                        <p className="text-gray-300">
                            Here I&apos;ve Tutored junior students in their first year Engineering and Computer Science 
                            papers, helping with questions and directioning them on how to solve the University assignments 
                            and tasks. 
                        </p>
                        </div>
                    </div>

                {/* Languages */}
                <div className="flex items-center space-x-2 text-white cursor-pointer">
                    <p className="text-2xl my-[10px] text-[20px] font-bold">Languages</p>
                </div>
                <div className="flex gap-6">
                {/* English */}
                <div className="flex items-center gap-2">
                <img
                    src="https://flagcdn.com/32x24/nz.png"
                    alt="Canada Flag"
                    className="w-8 h-6"
                />
                <span className="text-gray-300 text-lg">English</span>
                </div>

                {/* Portuguese */}
                <div className="flex items-center gap-2">
                <img
                    src="https://flagcdn.com/32x24/br.png"
                    alt="Brazil Flag"
                    className="w-8 h-6"
                />
                <span className="text-gray-300 text-lg">Portuguese</span>
                </div>
            </div>
                {/* Skills */}
                <div className="flex items-center space-x-2 text-white cursor-pointer">
                    <p className="text-2xl my-[10px] text-[20px] font-bold">Skills</p>
                    <AiOutlineBulb />
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                        C# | .NET
                    </li>
                    <li>
                        Python
                    </li>
                    <li>
                        Javascript (React.js | Node.js | Express.js)
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Java
                    </li>
                    <li>
                        Git
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;