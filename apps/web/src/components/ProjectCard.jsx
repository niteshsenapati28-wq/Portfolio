
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectCard = ({ project, index }) => {
  const getTechnologies = () => {
    if (!project.technologies) return [];
    if (Array.isArray(project.technologies)) return project.technologies;
    if (typeof project.technologies === 'string') return project.technologies.split(',');
    return [];
  };

  const technologies = getTechnologies()
    .filter(t => t && typeof t === 'string')
    .map(t => t.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full flex flex-col"
    >
      <Card className="glass-card-hover h-full flex flex-col overflow-hidden">
        {project.image && (
          <div className="relative h-48 overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title || "Project image"}
              className="w-full h-full object-cover smooth-transition hover:scale-110"
            />
          </div>
        )}
        
        <CardHeader>
          <CardTitle className="text-balance">{project.title}</CardTitle>
          <CardDescription className="line-clamp-3">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          {technologies.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">No technologies specified</p>
          )}
        </CardContent>

        <CardFooter className="flex gap-2 mt-auto pt-4">
          {project.githubURL && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.githubURL} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.liveURL && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <a href={project.liveURL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
