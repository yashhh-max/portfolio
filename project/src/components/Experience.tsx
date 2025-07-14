import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      role: 'Frontend Development Intern (Future Goal)',
      company: 'Tech Startup',
      location: 'Remote',
      duration: 'Summer 2024',
      type: 'Internship',
      description: 'Looking forward to gaining hands-on experience in frontend development, working with modern frameworks and contributing to real-world projects.',
      skills: ['html & css', 'javascript'],
      status: 'goal',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'from-green-500 to-emerald-500';
      case 'goal':
        return 'from-blue-500 to-purple-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship':
        return '🎯';
      case 'Volunteer':
        return '🤝';
      case 'Personal':
        return '💻';
      default:
        return '💼';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Experience & Journey
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My learning journey and experiences as a developing software engineer
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${getStatusColor(exp.status)} rounded-full flex items-center justify-center shadow-lg`}>
                  <Briefcase className="text-white" size={24} />
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                        <span className="text-2xl">{getTypeIcon(exp.type)}</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {exp.company}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200/30 dark:border-blue-700/30">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Looking Forward
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As a student actively learning and growing, I'm eager to take on new challenges, 
              internships, and collaborative projects that will help me develop into a skilled software engineer. 
              I'm particularly interested in frontend development, data science applications, and contributing to meaningful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;