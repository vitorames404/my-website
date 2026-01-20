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
                {/* The Story */}
                <div className="mb-8">
                    <p className="text-3xl font-bold text-white">About Me</p>
                    <div className="h-[2px] rounded-lg mt-3 mb-6 bg-primary-400 max-w-[100px]" />
                    <div className="text-justify space-y-4">
                        <p className='text-base leading-relaxed text-text-secondary'>
                            Junior Full-Stack Developer with a Backend focus and a <span className="text-primary-400 font-semibold">BSc in Computer Science</span> from New Zealand. I specialize in building robust, scalable applications using <span className="text-primary-400 font-semibold">Node.js</span>, <span className="text-primary-400 font-semibold">C#</span>, <span className="text-primary-400 font-semibold">.NET</span>, and <span className="text-primary-400 font-semibold">SQL</span>. Proven ability to deliver full-stack solutions with <span className="text-primary-400 font-semibold">React.js</span> and optimize performance.
                        </p>
                        <p className='text-base leading-relaxed text-text-secondary'>
                            Currently seeking Junior Full-Stack or Backend Developer roles in New Zealand where I can apply my expertise in <span className="text-primary-400 font-semibold">C#</span>, <span className="text-primary-400 font-semibold">JavaScript</span>, and <span className="text-primary-400 font-semibold">Python</span> to solve real-world challenges and contribute to innovative projects.
                        </p>
                    </div>
                </div>

                {/* Tech Stack Preview */}
                <div className="mb-8">
                    <p className="text-2xl font-bold text-white">My Toolkit</p>
                    <div className="h-[2px] rounded-lg mt-3 mb-6 bg-primary-400 max-w-[100px]" />
                    <div className="flex flex-wrap gap-2">
                        {['C#', '.NET', 'Python', 'Django', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'SQL Server', 'MongoDB', 'Dapper', 'Git', 'REST APIs', 'Agile'].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-primary-400 bg-opacity-20 border border-primary-400 border-opacity-40 rounded-full text-sm text-primary-400 font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-2xl font-bold text-white">
                        Let's Connect
                    </p>
                    <div className="h-[2px] rounded-lg mt-3 mb-6 bg-primary-400 max-w-[120px]" />
                </div>
                <SocialLinks/>
                
                {/* Download CV Section */}
                <div className="mt-10 pt-8 border-t border-primary-400 border-opacity-20">
                    <a
                        href="/cv.pdf"
                        download="Vitor_Ames_CV.pdf"
                        className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-500 text-background-primary font-bold rounded-lg hover:from-primary-300 hover:to-primary-400 transition-all transform hover:scale-105"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                        </svg>
                        Download My CV
                    </a>
                </div>
                <p className="text-2xl mt-8 font-bold text-white">
                  Things I've Built
                </p>
                <p className="text-text-secondary text-base mt-2 mb-4">
                    From competitive puzzles to AI-powered tools. Here's what I create when ideas meet execution.
                </p>
                <div className="h-[2px] rounded-lg mb-8 bg-primary-400 max-w-[140px]" />
                <Projects setCurrentPage={setCurrentPage} />
                
                {/* Recent Work & Experience */}
                <div className="mt-12 mb-8">
                    <p className="text-2xl font-bold text-white">
                        Recent Work & Experience
                    </p>
                    <div className="h-[2px] rounded-lg mt-3 mb-6 bg-primary-400 max-w-[200px]" />
                    
                    <div className="space-y-4">
                        {/* Exaba Work-Integrated Learning */}
                        <div className="bg-background-secondary bg-opacity-30 border border-primary-400 border-opacity-30 rounded-lg p-5">
                            <div className="flex items-start justify-between mb-1">
                                <div>
                                    <h4 className="text-lg font-bold text-primary-400">Work-Integrated Learning</h4>
                                    <p className="text-accent-400 text-sm font-semibold">Exaba</p>
                                </div>
                            </div>
                            <p className="text-text-tertiary text-xs mb-3">2024 (3-4 months)</p>
                            <p className="text-text-secondary text-base leading-relaxed mb-3">
                                Collaborated with company technicians on mobile application development using modern technologies. Contributed to building solutions with Flutter and Dart for Android platform, working closely with the development team to implement features and integrate with backend systems.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">Flutter</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">Dart</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">Android Studio</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">REST APIs</span>
                            </div>
                        </div>

                        {/* Angellira */}
                        <div className="bg-background-secondary bg-opacity-30 border border-primary-400 border-opacity-30 rounded-lg p-5">
                            <div className="flex items-start justify-between mb-1">
                                <div>
                                    <h4 className="text-lg font-bold text-primary-400">I.T Support Technician & Junior Backend Developer</h4>
                                    <p className="text-accent-400 text-sm font-semibold">Angellira Satellite Tracking</p>
                                </div>
                            </div>
                            <p className="text-text-tertiary text-xs mb-3">November 2021 - November 2022 (1 year)</p>
                            <p className="text-text-secondary text-base leading-relaxed mb-3">
                                Managed and executed complex SQL queries to troubleshoot customer system issues in large-scale database environments supporting C#/.NET applications. Assisted senior developers with bug fixes and maintenance in C#/.NET applications. Gained practical experience in enterprise API development by contributing to improvements and learning C#/.NET best practices.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">SQL</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">C#</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">.NET</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">API Development</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">Technical Support</span>
                            </div>
                        </div>

                        {/* Sessional Assistant */}
                        <div className="bg-background-secondary bg-opacity-30 border border-primary-400 border-opacity-30 rounded-lg p-5">
                            <div className="flex items-start justify-between mb-1">
                                <div>
                                    <h4 className="text-lg font-bold text-primary-400">Sessional Assistant</h4>
                                    <p className="text-accent-400 text-sm font-semibold">University of Waikato</p>
                                </div>
                                <span className="px-2 py-1 bg-primary-400 bg-opacity-20 border border-primary-400 border-opacity-40 rounded text-xs text-primary-400 font-medium">Tutoring</span>
                            </div>
                            <p className="text-text-tertiary text-xs mb-3">January 2024 - Present</p>
                            <p className="text-text-secondary text-base leading-relaxed mb-3">
                                Supporting students in core Computer Science courses. Providing guidance on problem-solving, debugging techniques, and best practices. Facilitating understanding of foundational programming concepts and software design principles.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">Teaching</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">Mentoring</span>
                                <span className="px-2 py-1 bg-background-secondary border border-primary-400 border-opacity-30 rounded text-xs text-primary-400">Code Review</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
