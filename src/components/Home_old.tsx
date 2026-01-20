import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Projects from './Projects';

type HomeProps = {
  setCurrentPage: (page: string) => void;
};

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {

    const SocialLinks = () => {
        return (
          <div className="text-text-secondary mt-2">
            <ul className="space-y-3">
              {/* GitHub */}
              <li className="flex items-center space-x-3">
                <FaGithub className="text-lg text-primary-400" />
                <a
                  href="https://github.com/vitorames404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:underline hover:text-primary-300"
                >
                  @vitorames404
                </a>
              </li>
      
              {/* LinkedIn */}
              <li className="flex items-center space-x-3">
                <FaLinkedin className="text-lg text-primary-400" />
                <a
                  href="https://www.linkedin.com/in/vitorames/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:underline hover:text-primary-300"
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
                <div className="mb-6">
                    <p className="text-3xl font-bold text-white">About me</p>
                    <div className="h-[2px] rounded-lg mt-3 mb-6 bg-primary-400 max-w-[80px]" />
                </div>
                <div className="text-justify space-y-4">
                <p className="text-base leading-relaxed text-text-secondary">
                    In a hurry? Check out my{' '}
                    <span
                        onClick={() => setCurrentPage("resume")}
                        className="cursor-pointer text-primary-400 hover:underline hover:text-primary-300 font-semibold"
                    >
                        resumé!
                    </span>
                </p>
                    <p className='text-base leading-relaxed text-text-secondary'>

                        I’m a 22-year-old full-stack developer from Brazil, currently pursuing a Computer Science degree in New Zealand.

                        My journey in programming began in 2021 when I started my first Computer Science course. Since then, I’ve been focusing on web development with a full-stack approach, leaning towards back-end development. I have hands-on experience with Python (Django), JavaScript (Node.js, React, Express), and C# (API and back-end development), along with some familiarity with Java.
                    </p>
                </div>
                <div className="mt-8">
                    <p className="text-2xl font-bold text-white">
                        Let's Connect
                    </p>
                    <div className="h-[2px] rounded-lg mt-3 mb-6 bg-primary-400 max-w-[120px]" />
                </div>
                <SocialLinks/>
                <p className="text-2xl mt-8 font-bold text-white">
                  Things I've Built
                </p>
                <p className="text-text-secondary text-base mt-2 mb-4">
                    From puzzle games to AI-powered tools—here's what happens when ideas meet execution.
                </p>
                <div className="h-[2px] rounded-lg mb-8 bg-primary-400 max-w-[140px]" />
                <Projects setCurrentPage={setCurrentPage} />  
            </div>
        </div>
    );
};

export default Home;
