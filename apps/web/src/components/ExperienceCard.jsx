
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary hidden md:block" />
      <div className="absolute left-[-8px] top-6 w-4 h-4 rounded-full bg-primary hidden md:block" />
      
      <Card className="glass-card-hover md:ml-8">
        <CardHeader>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-balance">{experience.role}</CardTitle>
              <CardDescription>{experience.company}</CardDescription>
              <p className="text-sm text-muted-foreground mt-1">{experience.duration}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">{experience.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
