import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Projects from './Projects';

type HomeProps = {
  setCurrentPage: (page: string) => void;
};

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {

    const SocialLinks = () => {
        return (
          <div className="text-gray-300 mt-4">
            <ul className="space-y-2">
              {/* GitHub */}
              <li className="flex items-center space-x-2">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/vitorames404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-teal-400"
                >
                  @vitorames404
                </a>
              </li>
      
              {/* LinkedIn */}
              <li className="flex items-center space-x-2">
                <FaLinkedin className="text-xl" />
                <a
                  href="https://www.linkedin.com/in/vitorames/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-teal-400"
                >
                  /in/vitorames/
                </a>
              </li>
            </ul>
          </div>
        );
      };

    return (
        <div className="w-screen min-h-10 p-[15px]">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl text=[18px] mx-auto text-white">
                <div>
                    <p className="text-2xl mt-[10px] text-[20px] font-nunito font-bold">About me</p>
                    <div className="h-[3px] rounded-lg mb-4 bg-gray-600 max-w-[90px]" />
                </div>
                <div className="text-justify">
                <p>
                    In a hurry? Check out my{' '}
                    <span
                        onClick={() => setCurrentPage("resume")}
                        className="cursor-pointer text-teal-400 hover:underline hover:text-teal-300"
                    >
                        resumé!
                    </span>
                </p>
                    <p className='mt-[10px]'>

                        I’m a 22-year-old full-stack developer from Brazil, currently pursuing a Computer Science degree in New Zealand.

                        My journey in programming began in 2021 when I started my first Computer Science course. Since then, I’ve been focusing on web development with a full-stack approach, leaning towards back-end development. I have hands-on experience with Python (Django), JavaScript (Node.js, React, Express), and C# (API and back-end development), along with some familiarity with Java.
                    </p>
                </div>
                <p className="text-2xl mt-[30px] font-nunito text-[20px] font-bold">
                  Check out some of my projects
                </p>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600 max-w-[285px]" />
                <Projects setCurrentPage={setCurrentPage} />
                <div>
                    <p className="text-2xl mt-[30px] font-nunito text-[20px] font-bold">
                        Check my social media
                    </p>
                </div>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600 max-w-[210px]" />
                <SocialLinks/>
            </div>
        </div>
    );
};

export default Home;
