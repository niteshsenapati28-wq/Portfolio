
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ExperienceCard from '@/components/ExperienceCard.jsx';
import pb from '@/lib/pocketbaseClient';

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        let records = await pb.collection('experience').getFullList({
          sort: '-startDate',
          $autoCancel: false
        });

        // Apply requested overrides or insert if missing
        let hasInternship = false;
        records = records.map(exp => {
          if (exp.role?.toLowerCase().includes('intern')) {
            hasInternship = true;
            return {
              ...exp,
              company: 'ApnaCollege',
              duration: '2 years'
            };
          }
          return exp;
        });

        if (!hasInternship) {
          records.push({
            id: 'hardcoded-intern-1',
            company: 'ApnaCollege',
            role: 'Fullstack Developer Intern',
            duration: '2 years',
            description: 'Building and maintaining scalable web applications using the MERN stack.',
            startDate: new Date('2022-01-01').toISOString(),
          });
        }

        setExperiences(records);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <>
      <Helmet>
        <title>Experience - Nitesh Senapati</title>
        <meta name="description" content="Professional experience and work history of Nitesh Senapati, Full Stack Developer." />
      </Helmet>

      <Header />

      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Professional Experience
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                My journey in software development and web technologies
              </p>
            </motion.div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : experiences.length > 0 ? (
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
                <div className="space-y-8">
                  {experiences.map((experience, index) => (
                    <ExperienceCard key={experience.id} experience={experience} index={index} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No experience entries found.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ExperiencePage;
