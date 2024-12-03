import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home  = () => {

    const SocialLinks = () => {
        return (
          <div className="text-gray-300 mt-4">
            <ul className="space-y-2">
              {/* GitHub */}
              <li className="flex items-center space-x-2">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/vitames404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-teal-400"
                >
                  @yvitames404
                </a>
              </li>
      
              {/* LinkedIn */}
              <li className="flex items-center space-x-2">
                <FaLinkedin className="text-xl" />
                <a
                  href="https://www.linkedin.com/in/vitor-ames/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-teal-400"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        );
      };

    return (
        <div className="w-screen min-h-10 p-[15px]">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl mx-auto text-white">
                <div>
                    <p className="text-2xl my-[10px] text-[20px] font-bold">About me</p>
                </div>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600" />
                <div className="text-justify text-[18px]">
                    <p>
                        In a hurry? Check out my <a href="#">resumé!</a>
                    </p>
                    <p className='mt-[10px]'>

                        I’m a 22-year-old full-stack developer from Brazil, currently pursuing a Computer Science degree in New Zealand.

                        My journey in programming began in 2021 when I started my first Computer Science course. Since then, I’ve been focusing on web development with a full-stack approach, leaning towards back-end development. I have hands-on experience with Python (Django), JavaScript (Node.js, React, Express), and C# (API and back-end development), along with some familiarity with Java.
                    </p>
                    <p className='mt-[10px]'> 
                        Currently, I’m an IT student in New Zealand actively seeking opportunities to kickstart my career as a developer and grow professionally in the country.
                    </p>
                </div>
                <div>
                    <p className="text-2xl mt-[30px] text-[20px] font-bold">
                        Check my social media
                    </p>
                    <p>

                    </p>
                </div>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600" />
                <SocialLinks/>
            </div>
        </div>
    );
};

export default Home;
