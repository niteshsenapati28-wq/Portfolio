
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="glass-card-hover">
        <CardHeader>
          <CardTitle className="text-lg">{skill.skillName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{skill.category}</span>
              <span className="font-medium">{skill.proficiency}%</span>
            </div>
            <Progress value={skill.proficiency} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
