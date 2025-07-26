import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { coursesDataPTBR, getFeaturedCoursesPTBR, getCoursesByLevelPTBR, Course } from '../../data/coursesDataPTBR';

const LearnPagePTBR: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<Course['level'] | 'All Levels'>('All Levels');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesDataPTBR);

  const featuredCourses = getFeaturedCoursesPTBR();

  useEffect(() => {
    let courses = selectedLevel === 'All Levels' 
      ? coursesDataPTBR 
      : getCoursesByLevelPTBR(selectedLevel);

    if (searchQuery) {
      courses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredCourses(courses);
  }, [selectedLevel, searchQuery]);

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'Beginner': return 'Iniciante';
      case 'Intermediate': return 'Intermediário';
      case 'Advanced': return 'Avançado';
      default: return 'Todos os Níveis';
    }
  };

  const CourseCard: React.FC<{ course: Course; featured?: boolean }> = ({ course, featured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ${featured ? 'border-2 border-purple-500' : ''}`}>
      <a href={course.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="p-6 flex flex-col h-full">
          {featured && <div className="text-purple-400 text-sm font-bold mb-2">DESTAQUE</div>}
          <h3 className="text-xl font-bold text-white mb-2 flex-grow">{course.title}</h3>
          <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
            <span>{course.provider}</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">{tag}</span>
            ))}
          </div>
          <div className={`mt-auto px-3 py-1 text-sm rounded-full font-semibold text-center w-fit ${course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' : course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
            {getLevelLabel(course.level)}
          </div>
        </div>
      </a>
    </motion.div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Aprenda IA em Português
        </motion.h1>
        <p className="text-center text-lg text-gray-400 mb-12">Cursos selecionados para Brasileiros, oferecidos por instituições de renome.</p>

        <section>
          <h2 className="text-3xl font-bold mb-6">Cursos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} featured />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Todos os Cursos</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-800/50 rounded-lg">
            <input
              type="text"
              placeholder="Buscar por título ou tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-gray-700 text-white placeholder-gray-400 rounded-md px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as Course['level'] | 'All Levels')}
              className="bg-gray-700 text-white rounded-md px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="All Levels">Todos os Níveis</option>
              <option value="Beginner">Iniciante</option>
              <option value="Intermediate">Intermediário</option>
              <option value="Advanced">Avançado</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnPagePTBR;