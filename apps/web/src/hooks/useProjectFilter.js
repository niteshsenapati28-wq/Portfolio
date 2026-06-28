
import { useState, useMemo } from 'react';

export const useProjectFilter = (projects) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      if (project.technologies) {
        const techArray = Array.isArray(project.technologies)
          ? project.technologies
          : (typeof project.technologies === 'string' ? project.technologies.split(',') : []);
          
        techArray.forEach(tech => {
          if (tech && typeof tech === 'string') {
            techSet.add(tech.trim());
          }
        });
      }
    });
    return ['all', ...Array.from(techSet)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Safely handle missing title or description
      const title = project.title || '';
      const description = project.description || '';
      
      const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            description.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesTech = selectedTech === 'all';
      
      if (!matchesTech && project.technologies) {
        const techArray = Array.isArray(project.technologies)
          ? project.technologies
          : (typeof project.technologies === 'string' ? project.technologies.split(',') : []);
          
        matchesTech = techArray.some(tech => 
          typeof tech === 'string' && tech.trim().toLowerCase() === selectedTech.toLowerCase()
        );
      }
      
      return matchesSearch && matchesTech;
    });
  }, [projects, searchTerm, selectedTech]);

  return {
    searchTerm,
    setSearchTerm,
    selectedTech,
    setSelectedTech,
    filteredProjects,
    allTechnologies
  };
};
