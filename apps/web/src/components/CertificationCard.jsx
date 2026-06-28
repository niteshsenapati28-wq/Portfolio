
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationCard = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass-card-hover h-full flex flex-col">
        {certification.image && (
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img
              src={certification.image}
              alt={certification.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <CardHeader>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-balance">{certification.title}</CardTitle>
              <CardDescription>{certification.issuer}</CardDescription>
              {certification.issueDate && (
                <p className="text-sm text-muted-foreground mt-1">
                  Issued: {new Date(certification.issueDate).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </CardHeader>

        {certification.credentialURL && (
          <CardContent className="mt-auto">
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href={certification.credentialURL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Credential
              </a>
            </Button>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
};

export default CertificationCard;
