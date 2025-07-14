import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science & Engineering (Data Science)',
      institution: 'Kommuri Pratap Reddy Institute of Technology',
      location: 'Hyderabad, India',
      duration: '2023 - 2027',
      cgpa: '7.5',
      status: 'current',
      description: 'Currently pursuing a specialized degree in Computer Science with a focus on Data Science. The curriculum covers core computer science concepts along with advanced topics in machine learning, data analysis, and statistical modeling.',
      subjects: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Machine Learning Fundamentals',
        'Statistical Analysis',
        'Web Development',
        'Software Engineering',
        'Computer Networks'
      ],
      achievements: [
        'Maintaining consistent academic performance',
        'Active participation in coding competitions',
        'Regular contribution to class projects',
        'Strong foundation in programming languages'
      ]
    }
  ];

  const certifications = [
     {
      title: 'Web Development Basics',
      platform: 'Self-Study',
      date: '2025',
      status: 'completed'
    },
    {
      title: 'Python Programming Fundamentals',
      platform: 'Online Learning',
      date: 'ongoing',
      status: 'in-progress'
    },
   
    {
      title: 'Data Science Fundamentals',
      platform: 'Academic Course',
      date: 'Ongoing',
      status: 'in-progress'
    },
    {
      title: 'Advanced React Development',
      platform: 'Personal Learning',
      date: 'Planned 2025',
      status: 'planned'
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'from-green-500 to-emerald-500';
      case 'completed':
        return 'from-blue-500 to-purple-500';
      case 'in-progress':
        return 'from-yellow-500 to-orange-500';
      case 'planned':
        return 'from-gray-400 to-gray-500';
      default:
        return 'from-blue-500 to-purple-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current':
        return 'Currently Studying';
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Completed';
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Education & Learning
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My academic journey and continuous learning path in technology
          </motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-gray-800 dark:text-white flex items-center"
          >
            <GraduationCap className="mr-3 text-blue-500" size={32} />
            Academic Background
          </motion.h3>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div className="flex items-center space-x-3 mb-4 lg:mb-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getStatusColor(edu.status)} rounded-full flex items-center justify-center`}>
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <span className={`px-4 py-2 bg-gradient-to-r ${getStatusColor(edu.status)} text-white text-sm rounded-full font-medium`}>
                      {getStatusText(edu.status)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award size={16} />
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                  {edu.institution}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                  {edu.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <BookOpen className="mr-2 text-blue-500" size={20} />
                      Key Subjects
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {edu.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                        >
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <Award className="mr-2 text-purple-500" size={20} />
                      Achievements
                    </h5>
                    <div className="space-y-3">
                      {edu.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-gray-800 dark:text-white flex items-center"
          >
            <Award className="mr-3 text-purple-500" size={32} />
            Certifications & Courses
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getStatusColor(cert.status)} rounded-full flex items-center justify-center`}>
                    <Award className="text-white" size={16} />
                  </div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(cert.status)} text-white text-xs rounded-full font-medium`}>
                    {getStatusText(cert.status)}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {cert.platform}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {cert.date}
                </p>
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
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in lifelong learning and continuously updating my skills to stay current with 
              the rapidly evolving tech landscape. My goal is to graduate with strong technical 
              foundations and practical experience in software development and data science.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;