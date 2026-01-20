const Resume = () => {
    return (
        <div className="w-screen min-h-10 p-[15px]">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl mx-auto text-white">
                <div className="mb-6">
                    <p className="text-3xl font-bold">Résumé</p>
                    <div className="h-[2px] rounded-lg mt-3 bg-primary-400 max-w-[80px]" />
                </div>

                {/* Summary */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
                    <p className="text-text-secondary text-base leading-relaxed">
                        Full-stack developer with a passion for building scalable web applications. Specialized in backend development with strong technical foundation in multiple programming paradigms. Experienced in tutoring and mentoring junior developers while maintaining hands-on expertise in modern web technologies.
                    </p>
                </section>

                {/* Experience List */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Professional Experience</h2>
                    <div className="space-y-6">
                        {/* Job 1 - Tutor */}
                        <div className="border-l-2 border-primary-400 pl-4">
                            <h3 className="text-lg font-bold text-white">
                                Lab Demonstrator & Tutor
                            </h3>
                            <p className="text-accent-400 font-semibold text-sm">University of Waikato | Hamilton, New Zealand</p>
                            <p className="text-text-tertiary text-sm mb-2">January 2024 - Present</p>
                            <ul className="text-text-secondary text-base space-y-2 list-disc list-inside">
                                <li>Tutor and mentor junior students in foundational <span className="text-primary-400 font-semibold">Computer Science</span> and <span className="text-primary-400 font-semibold">Engineering</span> courses, providing comprehensive support for <span className="text-primary-400 font-semibold">programming fundamentals</span> and <span className="text-primary-400 font-semibold">software development</span> concepts</li>
                                <li>Lead practical lab sessions demonstrating real-world implementations of theoretical concepts, <span className="text-primary-400 font-semibold">debugging techniques</span>, and <span className="text-primary-400 font-semibold">industry best practices</span></li>
                                <li>Provide personalized guidance on coursework assignments, helping students develop critical <span className="text-primary-400 font-semibold">problem-solving skills</span> and <span className="text-primary-400 font-semibold">computational thinking</span></li>
                                <li>Assess and evaluate student progress through <span className="text-primary-400 font-semibold">code reviews</span>, offering constructive feedback to improve <span className="text-primary-400 font-semibold">coding standards</span> and <span className="text-primary-400 font-semibold">software design patterns</span></li>
                                <li>Facilitate <span className="text-primary-400 font-semibold">collaborative learning</span> environments that encourage peer-to-peer knowledge sharing and active participation</li>
                            </ul>
                        </div>

                        {/* Job 2 - I.T Support */}
                        <div className="border-l-2 border-primary-400 pl-4">
                            <h3 className="text-lg font-bold text-white">
                                I.T Support Technician & Junior Backend Developer
                            </h3>
                            <p className="text-accent-400 font-semibold text-sm">Angellira Satellite Tracking | Remote</p>
                            <p className="text-text-tertiary text-sm mb-2">November 2021 - November 2022 (1 year)</p>
                            <ul className="text-text-secondary text-base space-y-2 list-disc list-inside">
                                <li>Architected and developed <span className="text-primary-400 font-semibold">RESTful APIs</span> using <span className="text-primary-400 font-semibold">C#</span> and <span className="text-primary-400 font-semibold">.NET Framework</span>, integrating <span className="text-primary-400 font-semibold">Dapper ORM</span> for efficient database operations and optimized query performance</li>
                                <li>Designed and implemented <span className="text-primary-400 font-semibold">database schemas</span> using <span className="text-primary-400 font-semibold">SQL Server</span>, ensuring <span className="text-primary-400 font-semibold">data integrity</span>, <span className="text-primary-400 font-semibold">normalization</span>, and <span className="text-primary-400 font-semibold">scalable architecture</span> for satellite tracking systems</li>
                                <li>Performed comprehensive <span className="text-primary-400 font-semibold">software troubleshooting</span> and <span className="text-primary-400 font-semibold">debugging</span>, identifying root causes of technical issues and deploying timely solutions to minimize system downtime</li>
                                <li>Provided technical support and training to end-users, creating <span className="text-primary-400 font-semibold">documentation</span> and user guides to improve product adoption and customer satisfaction</li>
                                <li>Collaborated in <span className="text-primary-400 font-semibold">agile development</span> team environment, participating in <span className="text-primary-400 font-semibold">code reviews</span>, <span className="text-primary-400 font-semibold">sprint planning</span>, and cross-functional feature implementation</li>
                                <li>Maintained and updated <span className="text-primary-400 font-semibold">legacy systems</span> while implementing new features, ensuring <span className="text-primary-400 font-semibold">backward compatibility</span> and seamless integration with existing infrastructure</li>
                            </ul>
                        </div>

                        {/* Job 3 - Low Code Developer */}
                        <div className="border-l-2 border-primary-400 pl-4">
                            <h3 className="text-lg font-bold text-white">
                                Low Code Developer
                            </h3>
                            <p className="text-accent-400 font-semibold text-sm">Eisenh Software | Remote</p>
                            <p className="text-text-tertiary text-sm mb-2">March 2021 - September 2021 (6 months)</p>
                            <ul className="text-text-secondary text-base space-y-2 list-disc list-inside">
                                <li>Developed and deployed <span className="text-primary-400 font-semibold">full-stack web applications</span> using <span className="text-primary-400 font-semibold">Bubble.io</span> low-code platform, translating business requirements into functional prototypes and production-ready solutions</li>
                                <li>Engineered and optimized <span className="text-primary-400 font-semibold">relational database structures</span>, implementing efficient <span className="text-primary-400 font-semibold">data models</span> and establishing proper relationships to enhance application performance</li>
                                <li>Implemented custom <span className="text-primary-400 font-semibold">JavaScript</span> workflows and <span className="text-primary-400 font-semibold">API integrations</span> to extend platform capabilities beyond native functionality</li>
                                <li>Collaborated effectively in a small, fast-paced development team, managing <span className="text-primary-400 font-semibold">multiple concurrent projects</span> while adhering to strict delivery timelines</li>
                                <li>Conducted <span className="text-primary-400 font-semibold">user acceptance testing</span> and iterative refinements based on client feedback, ensuring alignment with project specifications and stakeholder expectations</li>
                                <li>Strengthened foundational knowledge in <span className="text-primary-400 font-semibold">JavaScript</span>, <span className="text-primary-400 font-semibold">DOM manipulation</span>, and <span className="text-primary-400 font-semibold">modern web development</span> principles through hands-on project work</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="bg-background-secondary bg-opacity-80 rounded-lg p-3 text-center border border-border-light">
                            <p className="text-primary-400 font-semibold">Backend</p>
                            <p className="text-text-secondary text-sm">C# • Python • Node.js</p>
                        </div>
                        <div className="bg-background-secondary bg-opacity-80 rounded-lg p-3 text-center border border-border-light">
                            <p className="text-primary-400 font-semibold">Frontend</p>
                            <p className="text-text-secondary text-sm">React.js • JavaScript • TypeScript</p>
                        </div>
                        <div className="bg-background-secondary bg-opacity-80 rounded-lg p-3 text-center border border-border-light">
                            <p className="text-primary-400 font-semibold">Databases</p>
                            <p className="text-text-secondary text-sm">SQL • MSSQL • Dapper ORM</p>
                        </div>
                        <div className="bg-background-secondary bg-opacity-80 rounded-lg p-3 text-center border border-border-light">
                            <p className="text-primary-400 font-semibold">Frameworks</p>
                            <p className="text-text-secondary text-sm">Django • Express.js • .NET</p>
                        </div>
                        <div className="bg-background-secondary bg-opacity-80 rounded-lg p-3 text-center border border-border-light">
                            <p className="text-primary-400 font-semibold">Tools</p>
                            <p className="text-text-secondary text-sm">Git • Visual Studio • Postman</p>
                        </div>
                        <div className="bg-background-secondary bg-opacity-80 rounded-lg p-3 text-center border border-border-light">
                            <p className="text-primary-400 font-semibold">Languages</p>
                            <p className="text-text-secondary text-sm">English • Portuguese</p>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
                    <div className="border-l-2 border-primary-400 pl-4">
                        <h3 className="text-lg font-bold text-white">
                            Bachelor of Computer Science
                        </h3>
                        <p className="text-accent-400 font-semibold text-sm">University of Waikato | Hamilton, New Zealand</p>
                        <p className="text-text-tertiary text-sm">Expected Graduation: 2025</p>
                    </div>
                </section>

                {/* Languages */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Languages</h2>
                    <div className="flex gap-6">
                        {/* English */}
                        <div className="flex items-center gap-2">
                            <img
                                src="https://flagcdn.com/32x24/nz.png"
                                alt="New Zealand Flag"
                                className="w-8 h-6 rounded"
                            />
                            <div>
                                <p className="text-white font-semibold text-sm">English</p>
                                <p className="text-gray-400 text-xs">Fluent</p>
                            </div>
                        </div>

                        {/* Portuguese */}
                        <div className="flex items-center gap-2">
                            <img
                                src="https://flagcdn.com/32x24/br.png"
                                alt="Brazil Flag"
                                className="w-8 h-6 rounded"
                            />
                            <div>
                                <p className="text-white font-semibold text-sm">Portuguese</p>
                                <p className="text-gray-400 text-xs">Native</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resume;
